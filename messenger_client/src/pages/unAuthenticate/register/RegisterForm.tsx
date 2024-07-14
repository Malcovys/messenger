import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterParams } from "@/store/interfaces/RegisterParams"

interface RegisterProps {
    submitCallback: (data: RegisterParams) => void
}

const FormSchema = z.object({
    first_name:z.string().min(2, {
        message: "2 caractères minimum.",
    }),
    last_name: z.string().min(2, {
        message: "2 caractères minimum.",
    }),
    email: z.string().min(6, {
        message: "6 caractères minimum.",
    }),
    password: z.string().min(6, {
        message: "6 caractères minimum."
    })
})

const RegisterForm : React.FC<RegisterProps> = ({ submitCallback })=> {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name:"",
            last_name:"",
            email: "",
            password: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        submitCallback(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField control={form.control} name="first_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                        <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="last_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                        <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                        <Input type="password"{...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full" variant={"custom"}>S'en registrer</Button>
            </form>
        </Form>
    )
}

export default RegisterForm;
