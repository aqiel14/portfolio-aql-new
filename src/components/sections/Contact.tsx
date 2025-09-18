"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, PhoneIcon, Pin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email("Invalid email"),
  message: z.string().min(5, "Message is too short"),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        alert("Message sent successfully 🚀");
        form.reset();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message ❌");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
        {/* Left: Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              nisi ex.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Send
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Right: Contact Info Card */}
        <div className="flex flex-col gap-8 justify-center items-center text-xl w-full max-w-md">
          <div className="flex gap-4 items-center w-full">
            <PhoneIcon className="w-16 h-16 bg-card rounded-xl p-4 shrink-0" />
            <div className="flex flex-col">
              <p className="text-muted-foreground">Phone</p>
              <p>(+62) 857 0321 4447</p>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full">
            <Mail className="w-16 h-16 bg-card rounded-xl p-4 shrink-0" />
            <div className="flex flex-col">
              <p className="text-muted-foreground">Email</p>
              <p>aqiel_ilhamy@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full">
            <MapPin className="w-16 h-16 bg-card rounded-xl p-4 shrink-0" />
            <div className="flex flex-col">
              <p className="text-muted-foreground">Location</p>
              <p>Tangerang Selatan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
