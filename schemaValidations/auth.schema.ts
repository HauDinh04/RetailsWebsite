import z from "zod";

export const RegisterBody = z
    .object({
        firstName: z.string().trim().min(2).max(256),
        lastName: z.string().trim().min(2).max(256),
        email: z.string().email(),
        telephone: z.string().trim().min(2).max(256),
        fax: z.string().trim().min(2).max(256),

        company: z.string().trim().min(2).max(256),
        address1: z.string().trim().min(2).max(256),
        address2: z.string().trim().min(2).max(256),
        city: z.string().trim().min(2).max(256),
        postCode: z.string().trim().min(2).max(256),
        country: z.enum(["0", "1", "2", "3"]),
        regionState: z.enum(["0", "1", "2", "3"]),

        password: z.string().min(6).max(100),
        confirmPassword: z.string().min(6).max(100),

        subscribe: z.enum(["yes", "no"], {
            required_error: "You need to select a notification type.",
        }),
        agree: z.boolean().default(false).optional(),
    })
    .strict()
    .superRefine(({ confirmPassword, password, agree }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Mật khẩu không khớp",
                path: ["confirmPassword"],
            });
        }
        if (!agree) {
            ctx.addIssue({
                code: "custom",
                message: "Bạn cần đồng ý với điều khoản.",
                path: ["agree"],
            });
        }
    });

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;

export const RegisterRes = z.object({
    data: z.object({
        token: z.string(),
        expiresAt: z.string(),
        account: z.object({
            id: z.number(),
            name: z.string(),
            email: z.string(),
        }),
    }),
    message: z.string(),
});

export type RegisterResType = z.TypeOf<typeof RegisterRes>;
