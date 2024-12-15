import { useEffect } from "react";
import SEO from "./../../components/Structure/SEO/SEO.js";
import "../../components/Structure/Main/Main.js";
import "./expect.css";

export const Expect = ({ setPageStatus }) => {
  useEffect(() => {
    setPageStatus("expect");
  }, []);

  return (
    <>
      <SEO
        title="What to expect"
        description="Osteopathy & massage across London"
        name="What to expect"
        type="article"
      />
      <main>
        <section className="expect content skinny">
          <h2 className="pageNameMobile">What to Expect</h2>
          <div className="content-item">
            <p>
            All appointments - whether osteopathy or massage - start with a consultation to find out a little more about you and your health, your needs and preferences. Massage sessions tend to have shorter consultations and assessment, depending on what is needed; for instance, if you are seeking a full body holistic or deep tissue massage then it may be very brief; whilst a sports massage to support recovery from a specific injury may involve a longer consultation. 
            </p>
  
      
            <p>
            In your first osteopathic appointment, we will discuss in some detail any health concerns you have - including any pain, tension or discomfort that motivated booking an appointment, as well as your health history. I may then assess how you move, which may involve asking you to take off any bulky layers of clothing, to get an understanding of what has brought you here today. 
            </p>

            <p>
            Treatment then involves a mix of soft tissue work (similar to massage), mobilisations and manipulations of your joints, rhythmical movements, and exercise and rehabilitation - as required. I draw on a deep understanding of anatomy and physiology, pathology, pain science and biomechanics that underpins my training in osteopathy. The approaches we use will always differ person to person based on your presentation and preferences. 
            </p>
            <p>
            My practice aims to be actively consent led, body neutral/ positive, gender and sexuality affirmative and anti-racist; I try to be aware of the influence of my own embodied experiences - as a middle-class, queer, white woman - on my professional and personal interactions. In practice this means I communicate what to expect, and ask questions where needed so that I don’t make assumptions. If I think you may benefit from treatment from someone else (another kind of practitioner, such as an acupuncturist, for instance) I will always recommend them to you too.

            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Expect;
