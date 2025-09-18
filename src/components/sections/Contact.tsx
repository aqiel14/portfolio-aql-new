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
  CardFooter,
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
import { Github, Linkedin, Mail, MapPin, PhoneIcon, Pin } from "lucide-react";
import Link from "next/link";

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
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
        {/* Left: Form Card */}
        <Card className="">
          <CardHeader>
            <CardTitle>Send me a message!</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
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
              </form>
            </Form>
          </CardContent>
          <CardFooter className="justify-end">
            <Button type="submit" className="w-full">
              Send
            </Button>
          </CardFooter>
        </Card>

        {/* Right: Contact Info Card */}
        <div className="flex flex-col gap-8 justify-center items-center text-xl w-full max-w-md md:px-0">
          <div className="flex gap-4 items-center w-full cursor-pointer hover:bg-card rounded-xl md:p-2 group">
            <PhoneIcon className="w-16 h-16 bg-card rounded-xl p-4 shrink-0" />
            <div className="flex flex-col">
              <p className="text-muted-foreground">Phone</p>
              <p className="group-hover:underline text-lg">
                (+62) 857 0321 4447
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full cursor-pointer hover:bg-card rounded-xl md:p-2 group">
            <Mail className="w-16 h-16 bg-card rounded-xl p-4 shrink-0" />
            <div className="flex flex-col">
              <p className="text-muted-foreground">Email</p>
              <p className="group-hover:underline text-lg">
                aqiel_ilhamy@gmail.com
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/aqiel-ilhamy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center w-full cursor-pointer hover:bg-card rounded-xl md:p-2 group "
          >
            <Linkedin className="w-16 h-16 bg-card rounded-xl p-4 shrink-0" />
            <div className="flex flex-col">
              <p className="text-muted-foreground">Linkedin</p>
              <p className="group-hover:underline text-lg">
                https://www.linkedin.com/in/aqiel-ilhamy/
              </p>
            </div>
          </a>
          <a
            href="https://github.com/aqiel14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center w-full cursor-pointer hover:bg-card rounded-xl md:p-2 group"
          >
            <Github className="w-16 h-16 bg-card rounded-xl p-4 shrink-0" />
            <div className="flex flex-col">
              <p className="text-muted-foreground">Github</p>
              <p className="group-hover:underline text-lg">
                https://github.com/aqiel14
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
