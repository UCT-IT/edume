import LocalizedStrings from "react-localization";

export let strings = new LocalizedStrings({
  en: {
    nav: {
      logo: "teachworks.",
      testimonial: "Testimonials",
      pricing: "Pricing",
      login: "Login",
      btn: "Try if for now",
    },
    dropdownFeatures: {
      title: "Features",
      dropdownMenus: [
        { menuName: "Overview", menuLink: "#" },
        {
          menuName: "Calendar & Scheduling",
          menuLink: "pages/calendarAndscheduling",
        },
        { menuName: "Communication", menuLink: "#" },
        { menuName: "Billing & Payroll", menuLink: "#" },
        { menuName: "Records & Analytics", menuLink: "#" },
        { menuName: "Customize & white Label", menuLink: "#" },
        { menuName: "Automation", menuLink: "#" },
        { menuName: "Multiple Branches", menuLink: "#" },
        { menuName: "Integrations & Add-Ons", menuLink: "#" },
        { menuName: "Website Plugins Demo", menuLink: "#" },
      ],
    },
    dropdownSolution: {
      title: "Solution",
      dropdownMenus: [
        { menuName: "Tutoring", menuLink: "#" },
        { menuName: "Language Schools", menuLink: "#" },
        { menuName: "Test Preparation", menuLink: "#" },
        { menuName: "Music Schools", menuLink: "#" },
        { menuName: "Driving Schools", menuLink: "#" },
      ],
    },
    dropdownSupport: {
      title: "Support",
      dropdownMenus: [
        { menuName: "Tutorials", menuLink: "#" },
        { menuName: "Getting Started Guide", menuLink: "#" },
        { menuName: "Knowledge Base", menuLink: "#" },
        { menuName: "Contact Us", menuLink: "#" },
        { menuName: "FAQs", menuLink: "#" },
        { menuName: "Blog", menuLink: "#" },
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
          `Allow your clients to easily book, request, join and their own lessons`,
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
    calendarAndScheduling: {
      heroContent: {
        title: "Complex Scheduling Simplified.",
        description: `Coordinating schedules with multiple teachers, students and locations can be a challenge.
        Teachworks simplifies scheduling and ensures that everyone is on the same page.`,
      },
      flexibleViews: {
        heading: `FLEXIBLE VIEWS`,
        title: `Multiple Calendar Views &
        Filters`,
        descriptionOne: `Finding open spaces is quick & easy with over six different
        calendar views including month, week agenda, daily agenda,
        teachers, and locations.`,
        descriptionTwo: `Plus calendar filters for students, teachers and locations.`,
        link: {
          text: `Try it for Free`,
          link: "#",
        },
      },
      easyAvailability: {
        heading: `EASY AVAILABILITY`,
        title: `Teacher Availability`,
        description: `View teacher availability on the calendar for quickly finding
        openings. Teachers can manage their availability from their
        personal Teachworks accounts, so their availability is always up-
        to-date.`,
        link: {
          text: `Start Your Free Trial`,
          link: "#",
        },
      },
      simplifiedScheduling: {
        heading: `SIMPLIFIED SCHEDULING`,
        title: `Quick and Easy
        Scheduling`,
        descriptionOne: `Manage schedule changes right from the calendar. Drag & Drop
        lessons to a new time, teacher or location in seconds.`,
        descriptionTwo: `Resize lessons to change duration. Click to schedule a new
        lesson.`,
        link: {
          text: `Open an Account`,
          link: "#",
        },
      },
      eliminateClashes: {
        heading: `ELIMINATE CLASHES`,
        title: `Spot Scheduling Conflicts`,
        descriptionOne: `When scheduling a new lesson, easily view a teacher's lesson
        and availability conflicts and location conflicts with the click of a
        button.`,
        descriptionTwo: `Conflict details include the specific lessons, availabilities and
        times of the conflicts.`,
        link: {
          text: `Try it Out`,
          link: "#",
        },
      },
      websiteBookingOne: {
        heading: `WEBSITE BOOKING`,
        title: `Booking Lessons from
        Your Website`,
        descriptionOne: `Allow students to book lessons with teachers directly from your
        website based on your teachers' availability.`,
        descriptionTwo: `Booking notifications are sent to the client, teacher and your
        company and the lesson is scheduled on your calendar.`,
        link: {
          text: `Start Your Free Trial`,
          link: "#",
        },
      },
      websiteBookingTwo: {
        heading: `WEBSITE BOOKING`,
        title: `Joining Open Classes
        from Your Website`,
        descriptionOne: `Use our Website Booking Plugin to let students view and join
        open classes directly from your website -- whenever it's most
        convenient for them.`,
        descriptionTwo: `Students can easily filter by date, teacher and class name, and
        they can see the number of open spaces available.`,
        link: {
          text: `Start Today`,
          link: "#",
        },
      },
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
});
