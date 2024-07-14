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
import { LoginParams } from "@/store/interfaces/LoginParams"

interface LoginProps {
    submitCallback: (data: LoginParams) => void
}

const FormSchema = z.object({
  email: z.string().min(1, {
    message: "Le champ est obligatoire",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 caractères"
  })
})

const LoginForm : React.FC<LoginProps> = ({ submitCallback })=> {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
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
                <Button type="submit" className="w-full" variant={"custom"}>Se connecter</Button>
            </form>
        </Form>
    )
}

export default LoginForm;
