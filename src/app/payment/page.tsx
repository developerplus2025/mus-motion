"use client";

import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import {
  CreditCard,
  CheckCircle,
  AlertCircle,
  Info,
  Lock,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
// import { useToast } from "@/hooks/use-toast";
const card = [
  {
    id: 1,
    name: "visa",
    src: "/visa.svg",
  },
  {
    id: 2,
    name: "mastercard",
    src: "/mastercard.svg",
  },
  {
    id: 3,
    name: "jcb",
    src: "/jcb.svg",
  },
];
const country = [
  {
    id: 1,
    value: "vietnam",
    label: "Viet Nam",
  },
  {
    id: 2,
    value: "unitedstate",
    label: "United State",
  },
  {
    id: 3,
    value: "canada",
    label: "Canada",
  },
  {
    id: 4,
    value: "unitedkingdom",
    label: "United Kingdom",
  },
  {
    id: 5,
    value: "rusia",
    label: "Russia",
  },
  {
    id: 6,
    value: "mexico",
    label: "Mexico",
  },
  {
    id: 7,
    value: "japan",
    label: "Japan",
  },
  {
    id: 8,
    value: "australia",
    label: "Australia",
  },
  {
    id: 9,
    value: "korea",
    label: "Korea",
  },
  {
    id: 10,
    value: "french",
    label: "French",
  },
] as const;
const FormSchema = z.object({
  language: z.string({
    required_error: "City is required",
  }),
});
const packages = [
  {
    id: "basic",
    name: "Basic",
    price: 9.99,
    description: "Essential features for individuals",
    features: ["5 GB Storage", "2 Projects", "Basic Support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 19.99,
    description: "Advanced features for professionals",
    features: [
      "20 GB Storage",
      "Unlimited Projects",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 49.99,
    description: "Full suite for large organizations",
    features: [
      "100 GB Storage",
      "Unlimited Projects",
      "24/7 Premium Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
  },
];

export default function PayMentPage() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isYearly, setIsYearly] = useState(false);

  const handlePackageSelect = (packageId: string) => {
    const selected = packages.find((pkg) => pkg.id === packageId);
    if (selected) setSelectedPackage(selected);
  };

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    if (!formData.get("name")) newErrors.name = "Name is required";
    if (!formData.get("email")) newErrors.email = "Email is required";
    if (!formData.get("address")) newErrors.address = "Address is required";
    if (!formData.get("city")) newErrors.city = "City is required";
    if (!formData.get("country")) newErrors.country = "Country is required";
    if (!formData.get("zipcode"))
      newErrors.zipcode = "Zip/Postal Code is required";
    if (!formData.get("card")) newErrors.card = "Card number is required";
    if (!formData.get("month")) newErrors.month = "Expiry month is required";
    if (!formData.get("year")) newErrors.year = "Expiry year is required";
    if (!formData.get("cvc")) newErrors.cvc = "CVC is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (validateForm(formData)) {
      // Here you would typically integrate with a payment processor
      setPaymentStatus("Payment processed successfully!");
      setErrors({});
    } else {
      setPaymentStatus("Please correct the errors in the form.");
    }
  };

  const annualPrice = (selectedPackage.price * 12 * 0.9).toFixed(2);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }
  // const { toast } = useToast();
  return (
    <div className="mx-auto w-full max-w-[70rem] space-y-8 p-4">
      <Card className="bg-black">
        <CardHeader>
          <CardTitle>Select a Software Package</CardTitle>
          <CardDescription>
            Choose the package that best fits your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-end space-x-2">
            <span className="text-sm">Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              id="billing-toggle"
            />
            <span className="text-sm">Yearly (10% off)</span>
          </div>
          <RadioGroup
            className="grid-cols-3 gap-4"
            defaultValue={selectedPackage.id}
            onValueChange={handlePackageSelect}
          >
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`mb-4 bg-black ${selectedPackage.id === pkg.id ? "border-primary" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={pkg.id} id={pkg.id} />
                      <Label htmlFor={pkg.id} className="text-lg font-semibold">
                        {pkg.name}
                      </Label>
                    </div>
                    <Badge variant="secondary">
                      $
                      {isYearly ? (pkg.price * 12 * 0.9).toFixed(2) : pkg.price}
                      /{isYearly ? "year" : "month"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                  <ul className="list-inside list-disc text-sm">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="bg-black">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>
            Enter your payment information to complete the purchase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="123 Main St"
                    required
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500">{errors.address}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="New York"
                      required
                    />
                    {errors.city && (
                      <p className="text-sm text-red-500">{errors.city}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select name="country">
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {country.map((country) => (
                          <SelectItem key={country.id} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                        {/* Add more countries as needed */}
                      </SelectContent>
                    </Select>
                    {errors.country && (
                      <p className="text-sm text-red-500">{errors.country}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipcode">Zip/Postal Code</Label>
                  <Input
                    id="zipcode"
                    name="zipcode"
                    placeholder="12345"
                    required
                  />
                  {errors.zipcode && (
                    <p className="text-sm text-red-500">{errors.zipcode}</p>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Card Information</h3>
              <div className="space-y-2">
                <Label htmlFor="card">Card Types</Label>
                <div className="grid grid-cols-4 justify-items-center">
                  {card.map((cd) => (
                    <Image
                      key={cd.id}
                      src={`${cd.src}`}
                      alt={cd.name}
                      height="50"
                      width="50"
                      className="h-[50px] w-auto dark:invert-[1]"
                    ></Image>
                  ))}
                  <Image
                    src={"/dinersclub.svg"}
                    alt={"dinersclub"}
                    height="40"
                    width="40"
                    className="h-[40px] w-auto dark:invert-[1]"
                  ></Image>
                </div>
                {errors.card && (
                  <p className="text-sm text-red-500">{errors.card}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="card">Card Number</Label>
                <div className="relative">
                  <Input
                    id="card"
                    name="card"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <svg
                    data-testid="geist-icon"
                    className="lucide lucide-lock absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
                    height={16}
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width={16}
                    style={{ color: "currentcolor" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {errors.card && (
                  <p className="text-sm text-red-500">{errors.card}</p>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="month">Expiry Month</Label>
                  <Select name="month">
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i} value={`${i + 1}`.padStart(2, "0")}>
                          {`${i + 1}`.padStart(2, "0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.month && (
                    <p className="text-sm text-red-500">{errors.month}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Expiry Year</Label>
                  <Select name="year">
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem
                          key={i}
                          value={`${new Date().getFullYear() + i}`}
                        >
                          {new Date().getFullYear() + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.year && (
                    <p className="text-sm text-red-500">{errors.year}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" name="cvc" placeholder="123" required />
                  {errors.cvc && (
                    <p className="text-sm text-red-500">{errors.cvc}</p>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Order Summary</h3>
              <div className="rounded-lg border bg-black p-4">
                <div className="mb-2 flex justify-between">
                  <span>{selectedPackage.name} Package</span>
                  <span>${isYearly ? annualPrice : selectedPackage.price}</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>Billing Cycle</span>
                  <span>{isYearly ? "Yearly" : "Monthly"}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>
                    ${isYearly ? annualPrice : selectedPackage.price}/
                    {isYearly ? "year" : "month"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="submit" className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay ${isYearly ? annualPrice : selectedPackage.price}{" "}
                    {isYearly ? "per year" : "per month"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to process payment securely</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-black">
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      Can I upgrade my plan later?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, you can upgrade your plan at any time. The price
                      difference will be prorated.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      What payment methods do you accept?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We accept all major credit cards and PayPal.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Is there a money-back guarantee?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer a 30-day money-back guarantee for all our
                      packages.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Terms of Service</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  By purchasing a package, you agree to our Terms of Service.
                  Please read them carefully before proceeding with your
                  purchase.
                </p>
                <Button variant="link" className="h-auto p-0">
                  Read Full Terms of Service
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Privacy Policy</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  We take your privacy seriously. Our Privacy Policy outlines
                  how we collect, use, and protect your personal information.
                </p>
                <Button variant="link" className="h-auto p-0">
                  Read Full Privacy Policy
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Info className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
