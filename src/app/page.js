import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>At <span className="text-orange-600 font-semibold">RST PIZZA,</span> we&apos;re not just about pizza; we&apos;re about creating experiences, fostering connections, and satisfying cravings. Founded on a passion for great food and friendly service, our journey began with a simple vision: to serve mouthwatering pizzas made with the finest ingredients and crafted with love.
          </p>
          <p >What sets us apart is our commitment to quality. From handcrafted dough prepared fresh daily to locally sourced toppings bursting with flavor, every bite of our pizza is a testament to our dedication to excellence. But it&apos;s not just about what goes into our pizzas, it&apos;s also about the care and attention that goes into every order.
          </p>
          <p >Beyond our delicious pizzas, we&apos;re a community hub, a place where friends and families gather to share laughter, stories, and of course, slices. Our warm and inviting atmosphere invites you to sit back, relax, and enjoy the simple pleasure of good food and good company.
          </p>
        </div>
      </section>

      <section className="text-center my-8" >

        <SectionHeader
          subHeader={"Don't hesitate"}
          mainHeader={'Contact Us'} />

        <div className="mt-8">
          <a href="tel:+9139203232" className="text-6xl font-bold underline text-gray-800">+91 323 243 545</a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 Alll right reserved
      </footer>
    </>
  )
}