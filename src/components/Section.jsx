const features = [
  {
    name: "Imam Hussain TV3 - English Channel",
    description:
      "IHTV is the only satellite channel that is on air in 5 different languages, Our aim is to convey knowledge about the Holy Qur’an, and the manners of Ahlul-Bayt.",
    logo: "https://pbs.twimg.com/profile_images/1449048870449778688/rlv72DLl_400x400.jpg",
  },
  {
    name: "Thaqlain",
    description:
      "Inspired by the Prophetic Narration of Thaqalayn, we believe these two have the answers to all modern-day challenges. We aim to present the multiple dimensions of the Quran and Ahlulbayt through digitally engaging campaigns.",
    logo: "https://pbs.twimg.com/profile_images/1276420928793174022/wEOX5xM9_400x400.jpg",
  },
  {
    name: "Al-Islam.org",
    description:
      "Online collection of over 2,800 resources on books of Islam and the teachings of Ahlul-Bayt (Peace and blessings of Allah be upon them) as well as questions and answers to satisfy your need of knowledge, by the will of Allah.",
    logo: "https://pbs.twimg.com/profile_images/818025672153190401/vtjha2iB_400x400.jpg",
  },
  {
    name: "Ahlulbayt: Documentaries",
    description:
      "Providing you lovely documentaries on the lifes of Ahlul-Bayt (Peace and blessings of Allah be upon them) as well as events in recent history and in modern times.",
    logo: "https://yt3.ggpht.com/ytc/AKedOLR2haSez9OsKglT9sWoFoRQof_xsM5vMjcE1KT3=s176-c-k-c0x00ffffff-no-rj",
  },
];

export default function Section() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            We Support These Organizations
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            "Imam abu Ja‘far, Muhammad al-Baqir ﷺ has said<br></br>
            ‘Discussing knowledge is study and study is a good prayer.’"
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Make sure to support them as well and try to donate even if it is a
            little to strive for the improvement of spreading the knowledge of
            Ahlul-Bayt <br></br>
            (Peace and blessings of Allah be upon them).{" "}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img className="rounded-md " src={feature.logo} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
