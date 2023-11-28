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
        { menuName: "Overview", menuLink: "/pages/overview" },
        {
          menuName: "Calendar & Scheduling",
          menuLink: "/pages/calendarAndscheduling",
        },
        { menuName: "Communication", menuLink: "/pages/communication" },
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
        { menuName: "Tutoring", menuLink: "/pages/solution/tutoring" },
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
    overview: {
      heroContent: {
        title: `Manage & Grow Your Business
        With Less Effort`,
        description: `Teachworks helps education businesses of all sizes simplify management and scale 
        their businesses.`,
      },
    },
    communication: {
      title: `Enhance & Automate 
      Communication.`,
      description: `Communication is an important part of any teaching organization. Teachworks will help your 
      business communicate and provide teachers, students and parents with the information 
      that they need.`,
      btn: "Get Started Today",
      userAccess: {
        heading: `EASY USER ACCESS`,
        title: `Personal, Online User 
        Accounts`,
        firstDescription: `Give your Teachers, Staff, Parents and Students personal online 
        accounts with access to their own information based on their 
        account type and permission settings.`,
        secondDescription: `Customers can conveniently and easily access their calendar, 
        lesson history, invoices and more from any computer with web-
        access.`,
        link: { text: "Try it for free", href: "#" },
      },
      eliminate: {
        heading: `ELIMINATE NO-SHOWS`,
        title: `Automatic Email 
        Reminders to Improve 
        Attendance`,
        firstDescription: `Reduce absences and confusion about lesson times and locations 
        with automated lesson reminders for students, parents and 
        teachers.`,
        secondDescription: `Reminder templates are fully customizable and you can adjust 
        how many hours in advance your reminders are sent..`,
        link: { text: "Open An Account", href: "#" },
      },
      stayInTouch: {
        heading: `STAY IN TOUCH`,
        title: `Provide Feedback with 
        Lesson Notese`,
        firstDescription: `After each lesson, teachers can save notes about the lesson and 
        have the option to send the notes to parents or students by 
        email.`,
        secondDescription: `Parents love receiving regular feedback, and this convenient 
        format provides them with a regular reminder of the value of 
        your teaching services.`,
        link: { text: "Sign Up", href: "#" },
      },
      automatedReminders: {
        heading: `AUTOMATED REMINDERS`,
        title: `Automatic SMS Lesson 
        Reminders`,
        firstDescription: `Enable the SMS Lesson Reminders Add-On and provide 
        students, parents and teachers with timely reminders sent right 
        to their mobile phones.`,
        secondDescription: `Customize messages and adjust lead times for each type of 
        recipient. Easily view delivery results for all of your reminders.`,
        link: { text: "Try Teachworks for Free", href: "#" },
      },
      automatedReminders2: {
        heading: `AUTOMATED REMINDERS`,
        title: `Send Individual & Group 
        Emails`,
        firstDescription: `Send emails to one or more of your teachers, staff, students and 
        parents.`,
        secondDescription: `Save unlimited email templates for frequently used 
        communications. Use merge tags to personalize messages for 
        each recipient.`,
        link: { text: "Strart Your free trial", href: "#" },
      },
      moreFeautesSections: {
        heading: "Here are a few more ways Teachworks helps you communicate...",
        features: [
          {
            title: "Easy Notifications",
            description:
              "Sending notifications from your account can be either automated, or it's as simple as checking a box when saving a form.",
          },
          {
            title: "Customizable Templates",
            description:
              "Customize your notifications with your own subject and message. Use merge tags to personalize each email.",
          },
          {
            title: "View Email Logs",
            description:
              "View detailed records of all notifications sent from your account.",
          },
          {
            title: "Track Deliverability",
            description:
              "Track which email addresses couldn't be delivered, so that you can correct your records.",
          },
          {
            title: "Welcome Emails",
            description:
              "Automatically send welcome emails to new clients, students and teachers when setting up a new profile.",
          },
          {
            title: "Invoice Emails",
            description:
              "Send invoices by email and allow your clients to save, print and pay online.",
          },
          {
            title: "Payment Emails",
            description:
              "Automatically send an email to a customer when you've received a payment.",
          },
          {
            title: "Teacher Payslips",
            description:
              "Send teachers their payslips by email including payment hours and details.",
          },
        ],
      },
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
      uptodateRecords: {
        heading: `UP-TO-DATE RECORDS`,
        title: `Detailed Records`,
        descriptionOne: `Track detailed records for each lesson including attendance
        status, revenue, wage, teacher, students, location, subject and
        more.`,
        descriptionTwo: `Plus teachers can enter lesson notes to save and email to
        students or parents.`,
        link: {
          text: `Start Your Free Trial`,
          link: "#",
        },
      },
      samePage: {
        heading: `BE ON THE SAME PAGE`,
        title: `Personal Calendars`,
        descriptionOne: `Give teachers, parents, and students easy, online access to their
        personal calendars.`,
        descriptionTwo: `Scheduling changes are available instantly in all accounts, so
        everyone will always be up-to-date.`,
        link: {
          text: `Start Today`,
          link: "#",
        },
      },
      stayOrganized: {
        heading: `STAY ORGANIZED`,
        title: `Schedule Confirmations`,
        descriptionOne: `Reduce last minute cancellations and maintain open
        communication with your customers with schedule
        confirmation emails.`,
        descriptionTwo: `The fully customizable email template gives your clients a quick
        outlook of upcoming sessions.`,
        link: {
          text: `Start Your Free Trial`,
          link: "#",
        },
      },
      zoneSupport: {
        heading: `MULTI TIME ZONE SUPPORT`,
        title: `Support Multiple Time
        Zones`,
        descriptionOne: `Do you offer online tutoring with employees and students in
        different time zones?Put an end to confusion about lesson times!`,
        descriptionTwo: `Our User Time Zones Add-On simplifies scheduling across time
        zones by displaying lessons in each user's local time.`,
        link: {
          text: `Try it Today`,
          link: "#",
        },
      },
      moreFeaturesSection: {
        heading: `Plus many more time-saving features...`,
        features: [
          {
            title: `Individuals & Groups`,
            description: `Schedule lessons for individuals or
            groups of students.`,
          },
          {
            title: `Calendar Lock`,
            description: `Lock calendar prior to date to
            prevent changes to past periods.`,
          },
          {
            title: `Repeating Lessons`,
            description: `Create repeating lessons with
            highly flexible repeat options.`,
          },
          {
            title: `Color-Coding`,
            description: `Color-code lessons by teacher,
            student or location.`,
          },
          {
            title: `Jump to Date`,
            description: `Jump to any date quickly with the
            calendar date picker.`,
          },
          {
            title: `Calendar Feeds`,
            description: `Access lessons from other devices
            using calendar feeds.`,
          },
          {
            title: `Adjustable Settings`,
            description: `Set default calendar view, first hour,
            time increments and more.`,
          },
          {
            title: `Lesson Size`,
            description: `Limit the number of students that
            can join a lesson.`,
          },
          {
            title: `Copy Lessons`,
            description: `Copy settings from existing lesson
            to create an identical lesson.`,
          },
          {
            title: `Joinable Lessons`,
            description: `Make lessons joinable and allow
            students to view and enroll in open
            lessons.`,
          },
          {
            title: `Cancellation Emails`,
            description: `Send a cancellation email to
            teachers and clients when a lesson
            is cancelled.`,
          },
          {
            title: `Cost Override`,
            description: `Manually override a student's
            default billing method when
            scheduling a lesson.`,
          },
        ],
      },
    },
    tutoring: {
      title: `Easy Tutor Management Software`,
      description: `Thousands of tutors and tutoring companies rely on Teachworks to organize and grow their
       tutoring businesses.`,
      btn: "Start your free trial",
      tutorScheduling: {
        title: `Tutor Scheduling Software 
        for your Tutoring Business`,
        description: `Teachworks provides easy-to-use software tools to manage your tutoring 
        business more efficiently. Speed up student and tutor management, 
        scheduling, online teaching, billing and more!`,
      },
      saveTime: {
        heading: "SAVE TIME",
        title: `Streamline Frequent 
        Administrative Tasks`,
        contents: [
          "Quickly schedule one-on-one sessions, group lessons or",
          "Import and update client and employee records in bulk.",
          `Keep your books up-to-date and avoid double data 
          capturing with our QuickBooks Online Integration.`,
        ],
        link: { text: "Try it for free", path: "#" },
      },
      impression: {
        heading: "MAKE A LASTING IMPRESSION",
        title: `Build Lasting Relationships 
        With Your Students`,
        contents: [
          `Customize and automate notifications to keep your 
          clients in the loop at all times about upcoming lessons, cancelled lessons, 
          new invoices and more.`,
          `Provide clients with quick and convenient ways to sign up, 
          book lessons/courses, manage their schedules and 
          reach out.`,
          `Leave a lasting impression with detailed, helpful notes 
          after each lesson.`,
        ],
        link: { text: "Start Today", path: "#" },
      },
      noShows: {
        heading: "REDUCE NO-SHOWS",
        title: `Improve Student 
        Attendance`,
        contents: [
          `Reduce no-shows by reminding clients about 
          their upcoming lessons through customizable, automated 
          reminder emails.`,
          `Provide clients with quick and convenient ways to sign up, 
          book lessons/courses, manage their schedules and 
          reach out.`,
          `Automatically remind clients about upcoming lessons by 
          text using our SMS Lesson Reminders Add-On.`,
        ],
        link: { text: "Start Today", path: "#" },
      },
      headaches: {
        heading: "REDUCE HEADACHES",
        title: `Manage Staff & Tutors 
        More Effectively`,
        contents: [
          `Create a custom application form to allow prospective 
          tutors to apply with ease.`,
          `Expand staff and tutor profiles with custom profile fields 
          to capture the most important information.`,
          `Enable user access and customize permission settings.`,
          `Employee hours & earnings are calculated automatically 
          based on your settings.`,
          `Use our Task Manager Add-On to delegate tasks to staff 
          and tutors easily and efficiently.`,
        ],
        link: { text: "Start Today", path: "#" },
      },
      invoicing: {
        heading: "SPEED UP INVOICING",
        title: `Enjoy Flexible Invoicing 
        Solutions`,
        contents: [
          `Easily generate invoices one-by-one or in bulk for specific 
          lessons, packages or flat fees.`,
          `Automate invoicing with our Invoice Autopilot Add-On 
          and free up more time to spend on other areas of your 
          tutoring business.`,
          `Collect credit card payments online through our Stripe 
          Integration. Allow clients to pay online or process 
          payments on their behalf.`,
        ],
        link: { text: "Start Today", path: "#" },
      },
      teachworks: {
        heading: "KEEP YOUR BRAND TOP OF MIND",
        title: `Integrate Teachworks 
        With Your Tutoring 
        Website`,
        description: `Teachworks offers several features that can be integrated 
        directly with your tutoring website and styled in Teachworks.

        View a Live Demo

        Need something custom? Use our API to build additional 
        solutions for your tutoring business.`,
        link: { text: "Start Today", path: "#" },
      },
      moreFeautesSections: {
        heading: "And many more features for your Tutoring Business...",
        features: [
          {
            title: "User Time Zones",
            description:
              "Simplify scheduling across time zones. Ideal for online tutors.",
          },
          {
            title: "Online Lesson Space",
            description:
              "Conduct online sessions with ease. Ideal for online tutors.",
          },
          {
            title: "LaTeX Lesson Notes",
            description:
              "Convert text in lesson notes to math equations. Ideal for math tutors.",
          },
          {
            title: "QuickBooks Online",
            description:
              "Sync customers, invoices, payments and more to QuickBooks Online.",
          },
          {
            title: "Results Tracking",
            description:
              "Easily track student progress over time. Ideal for test preparation centres.",
          },
          {
            title: "Schedule Confirmations",
            description:
              "Provide students with a snapshot of their upcoming lessons.",
          },
          {
            title: "Lesson Requests",
            description:
              "Allow students and their parents to easily request lessons through Teachworks.",
          },
          {
            title: "Online Lesson Booking",
            description:
              "Allow students to book lessons or join classes/courses right from your website.",
          },
          {
            title: "Stripe",
            description:
              "Collect payments the easy way by processing payments through Stripe.",
          },
        ],
      },
      altImage: "Tutoring Management Image",
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
