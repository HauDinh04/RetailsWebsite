import { RegisterBodyType } from "@/schemaValidations/auth.schema";

export const Register = async (data: RegisterBodyType) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL_JSON}/users`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization:
                        "Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
                },
                body: JSON.stringify(data),
                method: "POST",
            }
        );

        if (!res.ok) {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error post  Register...", error);
        return error;
    }
};
