import { z } from "zod";
declare const authSchema: {
    login: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
    register: z.ZodObject<{
        username: z.ZodString;
        email: z.ZodString;
        nomeCompleto: z.ZodString;
        idade: z.ZodNumber;
        curso: z.ZodString;
        password: z.ZodString;
        password_confirmation: z.ZodString;
    }, z.core.$strip>;
};
export default authSchema;
//# sourceMappingURL=auth.schema.d.ts.map