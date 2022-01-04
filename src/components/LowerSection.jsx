/* This example requires Tailwind CSS v2.0+ */
export default function LowerSection() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Find us</span>
          <span className="block text-indigo-600">
            You're more than welcome
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
      </div>
      <iframe
        className="w-full"
        height="250px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.781617633121!2d-0.25830528411553916!3d51.59056567964893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761137069fb40f%3A0x6bab37ce97a9d44a!2sImam%20Hussein%20TV!5e0!3m2!1sen!2sse!4v1641270798826!5m2!1sen!2sse"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
