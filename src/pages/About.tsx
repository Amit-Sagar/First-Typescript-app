import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <div className="py-20 bg-black">
         <h1 className="text-white/80 text-7xl text-center font-bold mt-6" >- Our Mission -</h1>
           <p className="text-white text-xl text-center max-w-3xl mx-auto mt-10 tracking-[0.01em] leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>
      </div>
    </Layout>
  );
};

export default About;
