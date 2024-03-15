// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/7FMGGxO54Hw
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"
// import { input } from "@/components/ui/input"
// import { button } from "@/components/ui/button"

// export default function WelcomePage() {
//   return (
//     <div className="bg-gradient-to-br from-purple-600 to-indigo-800 backdrop-blur fixed inset-0 dark:bg-gray-900/90">
//       <header className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-800 dark:bg-gray-900/90">
//         <div className="container flex items-center justify-between py-2 md:py-4">
//           <nav className="flex items-center space-x-4">
//             <Link className="flex items-center space-x-2 text-base font-semibold text-white" href="#">
//               <FlagIcon className="h-6 w-6" />
//               <span>CriminalScan</span>
//             </Link>
//             <Link
//               className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50"
//               href="#"
//             >
//               Home
//             </Link>
//             <Link
//               className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50"
//               href="#"
//             >
//               Services
//             </Link>
//             <Link
//               className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50"
//               href="#"
//             >
//               About
//             </Link>
//             <Link
//               className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50"
//               href="#"
//             >
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Link
//               className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50"
//               href="#"
//             >
//               Login
//             </Link>
//             <Link
//               className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
//               href="#"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>
//       <main className="grid min-h-screen gap-12 md:gap-0 md:grid-cols-2 items-center py-12 md:py-24 lg:py-32">
//         <div className="container grid gap-4 px-4 text-center md:px-6 md:place-self-start md:text-left">
//           <div className="space-y-3">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
//               Welcome to CriminalScan
//             </h1>
//             <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Explore our advanced AI technology for accurate criminal detection.
//             </p>
//           </div>
//           <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
//             <Link
//               className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
//               href="#"
//             >
//               Get Started
//             </Link>
//             <Link
//               className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-950"
//               href="#"
//             >
//               Contact Sales
//             </Link>
//           </div>
//         </div>
//         <div className="flex items-center justify-start">
//           <img
//             alt="Illustration"
//             className="rounded-lg shadow-lg object-cover object-center"
//             height="400"
//             src="/placeholder.svg"
//             style={{
//               aspectRatio: "800/400",
//               objectFit: "cover",
//             }}
//             width="800"
//           />
//         </div>
//       </main>
//       <section className="w-full border-t">
//         <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left">
//           <div className="space-y-4 md:space-y-6">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
//                 Criminal Details Recognition
//               </h2>
//               <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Utilize our cutting-edge technology to recognize intricate criminal details.
//               </p>
//             </div>
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-bold">Real-time Detection</h3>
//                 <p className="text-sm text-gray-200">Detect criminals in real-time using live video feeds.</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-bold">AI Analysis</h3>
//                 <p className="text-sm text-gray-200">Utilize advanced AI for in-depth criminal behavior analysis.</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-bold">Facial Recognition</h3>
//                 <p className="text-sm text-gray-200">Identify suspects through facial recognition technology.</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h3 className="font-bold">Case Management</h3>
//                 <p className="text-sm text-gray-200">Efficiently manage criminal cases with our integrated platform.</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//             <img
//               alt="Illustration"
//               className="overflow-hidden rounded-lg object-contain object-center"
//               height="300"
//               src="/placeholder.svg"
//               style={{
//                 aspectRatio: "600/300",
//                 objectFit: "cover",
//               }}
//               width="600"
//             />
//           </div>
//         </div>
//       </section>
//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10">
//           <div className="space-y-3">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About Us</h2>
//             <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Learn more about our mission and vision in revolutionizing criminal detection.
//             </p>
//           </div>
//           <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-3 gap-4 md:gap-8">
//             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
//               <img
//                 alt="Image"
//                 className="rounded-lg object-cover object-center"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "400/200",
//                   objectFit: "cover",
//                 }}
//                 width="400"
//               />
//               <h3 className="text-xl font-bold tracking-tighter">Accurate Results</h3>
//               <p className="text-sm text-gray-200">Our technology ensures precise detection of criminal activity.</p>
//             </div>
//             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
//               <img
//                 alt="Image"
//                 className="rounded-lg object-cover object-center"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "400/200",
//                   objectFit: "cover",
//                 }}
//                 width="400"
//               />
//               <h3 className="text-xl font-bold tracking-tighter">Advanced Technology</h3>
//               <p className="text-sm text-gray-200">We use cutting-edge AI for enhanced criminal detection.</p>
//             </div>
//             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
//               <img
//                 alt="Image"
//                 className="rounded-lg object-cover object-center"
//                 height="200"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "400/200",
//                   objectFit: "cover",
//                 }}
//                 width="400"
//               />
//               <h3 className="text-xl font-bold tracking-tighter">Rapid Analysis</h3>
//               <p className="text-sm text-gray-200">Our platform delivers quick insights into criminal behavior.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <footer className="bg-gradient-to-r from-purple-600 to-indigo-800 py-12 sm:py-16 text-white dark:bg-gray-50 dark:text-gray-900">
//         <div className="container grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-3">
//           <div className="space-y-2">
//             <Link className="inline-block text-2xl font-bold" href="#">
//               CriminalScan
//             </Link>
//             <p className="text-sm">Advanced criminal detection services using AI technology.</p>
//           </div>
//           <div className="space-y-2">
//             <h4 className="font-semibold">Links</h4>
//             <nav className="flex flex-col gap-2 md:gap-4 lg:gap-2 xl:gap-4">
//               <Link className="hover:underline" href="#">
//                 Home
//               </Link>
//               <Link className="hover:underline" href="#">
//                 Services
//               </Link>
//               <Link className="hover:underline" href="#">
//                 About
//               </Link>
//               <Link className="hover:underline" href="#">
//                 Contact
//               </Link>
//             </nav>
//           </div>
//           <div className="space-y-2">
//             <h4 className="font-semibold">Contact Us</h4>
//             <p className="text-sm">123 Street Name, City, Country contact@example.com</p>
//           </div>
//           <div className="space-y-2 md:col-start-2 md:space-y-4 lg:col-start-3 xl:col-start-3">
//             <h4 className="font-semibold">Subscribe</h4>
//             <p className="text-sm">Sign up for the latest updates and news about our services.</p>
//             <div className="flex flex-col gap-2 max-w-sm mx-auto md:flex-row md:gap-4 lg:max-w-md">
//               <input placeholder="Enter your email" required type="email" />
//               <button size="sm">Subscribe</button>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-200 border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-800 dark:border-gray-800 dark:bg-gray-50 dark:bg-gray-50/90" />
//         <div className="text-center text-xs py-4 border-t border-gray-200 border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-800 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:bg-gray-50 sm:text-sm">
//           © 2023 CriminalScan. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   )
// }

// function FlagIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   )
// }


// import { input } from "@/components/ui/input"
// import { button } from "@/components/ui/button"
import React from "react"

export default function WelcomePage() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-800 backdrop-blur fixed inset-0 dark:bg-gray-900/90">
      <header className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-800 dark:bg-gray-900/90">
        <div className="container flex items-center justify-between py-2 md:py-4">
          <nav className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2 text-base font-semibold text-white">
              <FlagIcon className="h-6 w-6" />
              <span>CriminalScan</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50">
              Home
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50">
              Services
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50">
              About
            </a>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2 text-sm font-medium border-b-2 border-transparent hover:border-white dark:hover:border-gray-50">
              Login
            </a>
            <a href="#" className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                 Sign Up
            </a>
          </div>
        </div>
      </header>
      <main className="grid min-h-screen gap-12 md:gap-0 md:grid-cols-2 items-center py-12 md:py-24 lg:py-32">
        <div className="container grid gap-4 px-4 text-center md:px-6 md:place-self-start md:text-left">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Welcome to CriminalScan
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our advanced AI technology for accurate criminal detection.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-950">
              Get Started
            </a>
            <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-950">
              Contact Sales
            </a>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <img
            alt="Illustration"
            className="rounded-lg shadow-lg object-cover object-center"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
      </main>
      <section className="w-full border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Criminal Details Recognition
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Utilize our cutting-edge technology to recognize intricate criminal details.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Real-time Detection</h3>
                <p className="text-sm text-gray-200">Detect criminals in real-time using live video feeds.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">AI Analysis</h3>
                <p className="text-sm text-gray-200">Utilize advanced AI for in-depth criminal behavior analysis.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Facial Recognition</h3>
                <p className="text-sm text-gray-200">Identify suspects through facial recognition technology.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">Case Management</h3>
                <p className="text-sm text-gray-200">Efficiently manage criminal cases with our integrated platform.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Illustration"
              className="overflow-hidden rounded-lg object-contain object-center"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/300",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Learn more about our mission and vision in revolutionizing criminal detection.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-3 gap-4 md:gap-8">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Image"
                className="rounded-lg object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <h3 className="text-xl font-bold tracking-tighter">Accurate Results</h3>
              <p className="text-sm text-gray-200">Our technology ensures precise detection of criminal activity.</p>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Image"
                className="rounded-lg object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <h3 className="text-xl font-bold tracking-tighter">Advanced Technology</h3>
              <p className="text-sm text-gray-200">We use cutting-edge AI for enhanced criminal detection.</p>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Image"
                className="rounded-lg object-cover object-center"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
              <h3 className="text-xl font-bold tracking-tighter">Rapid Analysis</h3>
              <p className="text-sm text-gray-200">Our platform delivers quick insights into criminal behavior.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-purple-600 to-indigo-800 py-12 sm:py-16 text-white dark:bg-gray-50 dark:text-gray-900">
        <div className="container grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-3">
          <div className="space-y-2">
            <a href="#" className="inline-block text-2xl font-bold">
              CriminalScan
            </a>
            <p className="text-sm">Advanced criminal detection services using AI technology.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Links</h4>
            <nav className="flex flex-col gap-2 md:gap-4 lg:gap-2 xl:gap-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Contact Us</h4>
            <p className="text-sm">123 Street Name, City, Country contact@example.com</p>
          </div>
          <div className="space-y-2 md:col-start-2 md:space-y-4 lg:col-start-3 xl:col-start-3">
            <h4 className="font-semibold">Subscribe</h4>
            <p className="text-sm">Sign up for the latest updates and news about our services.</p>
            <div className="flex flex-col gap-2 max-w-sm mx-auto md:flex-row md:gap-4 lg:max-w-md">
              <input placeholder="Enter your email" required type="email" />
              <button size="sm">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-800 dark:border-gray-800 dark:bg-gray-50 dark:bg-gray-50/90" />
        <div className="text-center text-xs py-4 border-t border-gray-200 border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-800 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:bg-gray-50 sm:text-sm">
          © 2023 CriminalScan. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}

