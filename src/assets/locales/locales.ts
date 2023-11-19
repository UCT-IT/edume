import LocalizedStrings from "react-localization";

export let strings = new LocalizedStrings({
  en: {
    nav: {
      testimonial: "Testimonials",
      pricing: "Pricing",
      login: "Login",
      btn: "Try if for now",
    },
    dropdownFeatures: {
      title: "Features",
      dropdownMenus: [
        "Overview",
        "Calendar & Scheduling",
        "Communication",
        "Billing & Payroll",
        "Records & Analytics",
        "Customize & white Label",
        "Automation",
        "Multiple Branches",
        "Integrations & Add-Ons",
        "Website Plugins Demo",
      ],
    },
    dropdownSolution: {
      title: "Solution",
      dropdownMenus: [
        "Tutoring",
        "Language Schools",
        "Test Preparation",
        "Music Schools",
        "Driving Schools",
      ],
    },
    dropdownSupport: {
      title: "Support",
      dropdownMenus: [
        "Tutorials",
        "Getting Started Guide",
        "Knowledge Base",
        "Contact Us",
        "FAQs",
        "Blog",
      ],
    },
    heroSection: {
      title: `Organize &
      Automate Your`,
      animatedText: [
        "Driving School",
        "Music school",
        "Language School",
        "Test Prep center",
        "Tutoring Company",
      ],
      description: `Teachworks is the #1 choice for managing your tutoring or
      teaching business. Easily manage scheduling, students, billing
      and more!`,
      btn: "Try It for free",
      tour: "or Take a Quick Tour",
    },
    features: {
      title: "OUR FEATURES",
      subTitle: "How Teachworks can Help Your Teaching Business",
      text: "Strengthened Security: The",
      link: "2-Factor Authentication Add-on",
      desc: "Add-on helps to keep your data and information more secure by adding an extra layer of security to your Teachworks account.",
      seeMore: "See More New Features",
      feature: {
        title: "Simplifying Scheduling",
        badge: "Hightlighted Feature",
        subtitle: "2-Factor Authentication Add-on",

        content: [
          "Speed up scheduling for one-on-one and group lessons using our many calendar views and time-savers.",
          "Send reminders to clients when their invoices are due.",
          "Allow your tutors & teachers to manage their own schedules and complete lessons with ease.",
          "Allow your clients to easily book, request, join and reschedule their own lessons",
          "Quickly switch between various calendars and views, spot conflicts, copy lessons, drag-and-drop lessons to update lesson data and more.",
        ],
        link: "More Scheduling Feature.",
        btn: "Start Your Free Trial",
      },
      getPaid: {
        title: "Get Paid Faster",
        content: [
          "Offer flexible billing options including hourly billing, package billing, flat fees or a combination to accommodate your client's needs.",
          "Generate single invoices, multiple invoices, or automate your invoicing.",
          "Send automatic Invoice Due Reminders and Low Package Balance Alerts to your clients.",
          "Allow your clients to pay online, or process payments on their behalf.",
          "Accept upfront credit card payments when new and existing clients book lessons, join classes or enroll in courses.",
        ],
        link: "More Billing Features.",
        btn: "Start Your Free Trial",
      },
      client: {
        title: "Get More Clients",
        content: [
          "Integrate the Website Booking Plugin with your existing website to make the sign-up process quick and easy.",
          "Showcase your tutors & teachers, their experience and their skills on your website to attract more clients.",
          "Manage new leads efficiently using Custom Forms and Follow Ups.",
          "Try out different types of lessons including Online, In-Person, or Group Lessons",
          "Manage online lessons through Lessonspace, Zoom, Google Meet and more.",
        ],
        link: "More Features For Attracting Clients.",
        btn: "Start Your Free Trial",
      },
      communication: {
        title: "More Communication Features",
        content: [
          "Send automatic Lesson Reminders by email or SMS to reduce no-shows",
          "Easily customize email templates and send emails automatically based on your requirements. ",
          "Record detailed Lesson Notes and send a copy to your clients to keep them updated.",
          "Allow your tutors & teachers to flag lessons to be reviewed by administrators or staff.",
          "Provide employees with access to valuable resources and information right on their profile.",
          "Send emails in bulk to single recipients, all students in a class and more.",
        ],
        link: "More Communication Features",
        btn: "Start Your Free Trial",
      },
      tutor: {
        title: "Equip Your Tutors & Teachers",
        content: [
          "Delegate scheduling and other tasks to your tutors & teachers with granular permission settings.",
          "Eliminate the need for timesheets as hours & earnings are calculated automatically as lessons are scheduled.",
          "Allow tutors & teachers to update their availability, schedule lessons and keep track of non-teaching tasks and earnings.",
          "Let tutors & teachers update their bio, subjects, and other information and share this on your website to attract new clients.",
          "If your tutors & teachers are independent contractors, you can allow them to invoice your company directly.",
        ],
        link: "Explore More Features.",
        btn: "Start Your Free Trial",
      },
      business: {
        title: "Grow Your Business",
        content: [
          "Use our various reports to keep track of business performance and easily identify opportunities for growth.",
          "Add additional locations, branches, or switch to a franchise system without outgrowing the software.",
          "Use bulk actions to quickly update records whether it's one or one thousand at a time.",
          "Choose from 60+ free integrations & add-ons that allow you to extend the functionality of your account to meet the needs of your growing business.",
        ],
        link: "More Reporting Features",
        btn: "Start Your Free Trial",
      },
    },
    works: {
      title: "How it Works",
      contents: [
        {
          heading: "Add Students & Tutors/Teachers",
          desc: "Add students and teachers one at a time or import them in bulk.",
        },
        {
          heading: "Schedule Lessons",
          desc: "Add lessons to the calendar or have clients book online.",
        },
        {
          heading: "Bill Your Clients",
          desc: "Generate invoices and process payments.",
        },
        {
          heading: "Grow Your Business",
          desc: "Use our reports to keep track of your business performance",
        },
      ],
    },
    businessWork: {
      title: "GROW WITH US",
      subTitle: "Built to Grow With Your Business",
      description:
        "Whether you have 10 students or 10,000, Teachworks is loaded with features to make managing large quantities of students, tutors/teachers and lessons faster & more efficient. If you have plans to expand to multiple locations or build a franchise system, Teachworks provides the tools to help you manage and monitor multiple locations from a single master account.",
      link: "Manage Multiple Branches",
    },
    FAQ: {
      title: "Popular Questions",
      link: "see more FAQs",
      content: [
        {
          title: "Is my data secure?",
          desc: "Yes! Teachworks follows best practices for securing data and access to the software, ensuring your data is always safe and secure. For more information.",
          link: "visit our Knowledge Base.",
        },
        {
          title: "Is support included?",
          desc: "Yes! Email support is included in all of our plans. We are very responsive to any questions you may have. We also have a detailed knowledge base and tutorials to help you make the most of your account.",
        },
        {
          title: "Can I integrate with my website?",
          desc: "Yes! We have many features that can be integrated with your website. This includes Website Booking, Custom Forms, Website Profiles for tutors & teachers and more",
          link: "View our demo site",
        },
      ],
    },
    footer: {
      footerHeader: `Simplify management, save time, and grow your
      business.`,
      footerBtn1: "Start Your Free Trial",
      footerBtn2: "Take a Quick Tour",
      footerColumns: [
        {
          footerTitle: "NAVIGATION",
          footerLinks: [
            "Scheduling",
            "Communication",
            "Billing & Payroll",
            "Records & Analytics",
            "Multiple Locations",
            "Integrations",
            "Website Plugins Demo",
          ],
        },
        {
          footerTitle: "RESOURCES",
          footerLinks: [
            "Tutorials",
            "Getting Started Guide",
            "Knowledge Base",
            "Teachworks Blog",
            "Client Testimonials",
          ],
        },
        {
          footerTitle: "SOLUTIONS",
          footerLinks: [
            "Tutoring Centers",
            "Language Schools",
            "Test Preparation",
            "Music Schools",
            "Driving Schools",
          ],
        },
        {
          footerTitle: "OUR COMPANY",
          footerLinks: [
            "About Us",
            "Contact",
            "Test Preparation",
            "Careers",
            "Status Page",
          ],
        },
        {
          footerTitle: "LEGAL",
          footerLinks: ["Privacy Policy", "Terms & Conditions"],
        },
      ],
      footerCopyRight: "© Teachworks 2021",
    },
  },
  bg: {},
});
