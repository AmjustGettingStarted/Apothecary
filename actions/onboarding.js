"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { doctorFormSchema } from "@/lib/schema";

/**
 * Sets the user's role and related information
 */
export async function setUserRole(formData) {
  const { userId } = await auth();

  if (!userId) {
    return { success: false, errors: { form: "Unauthorized" } };
  }

  // Find user in our database
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    return { success: false, errors: { form: "User not found in database" } };
  }

  const role = formData.get("role");

  if (!role || !["PATIENT", "DOCTOR"].includes(role)) {
    return { success: false, errors: { role: "Invalid role selection" } };
  }

  try {
    // For patient role - simple update
    if (role === "PATIENT") {
      await db.user.update({
        where: {
          clerkUserId: userId,
        },
        data: {
          role: "PATIENT",
        },
      });

      revalidatePath("/");
      return { success: true, redirect: "/doctors" };
    }

    // For doctor role - need additional information
    if (role === "DOCTOR") {
      const payload = {
        specialty: formData.get("specialty")?.toString() ?? "",
        experience: formData.get("experience"),
        credentialUrl: formData.get("credentialUrl")?.toString() ?? "",
        description: formData.get("description")?.toString() ?? "",
      };

      const parseResult = doctorFormSchema.safeParse(payload);

      if (!parseResult.success) {
        return {
          success: false,
          errors: parseResult.error.flatten().fieldErrors,
        };
      }

      const { specialty, experience, credentialUrl, description } = parseResult.data;

      await db.user.update({
        where: {
          clerkUserId: userId,
        },
        data: {
          role: "DOCTOR",
          specialty,
          experience,
          credentialUrl,
          description,
          verificationStatus: "PENDING",
        },
      });

      revalidatePath("/");
      return { success: true, redirect: "/doctor/verification" };
    }
  } catch (error) {
    console.error("Failed to set user role:", error);
    return { success: false, errors: { form: error.message ?? "Failed to update user profile" } };
  }
}

/**
 * Gets the current user's complete profile information
 */
export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    return user;
  } catch (error) {
    console.error("Failed to get user information:", error);
    return null;
  }
}
