import { useEffect } from "react";
import "../../components/Structure/Main/Main.js";
import "./expect.css";

export const Expect = ({ setPageStatus }) => {
  useEffect(() => {
    setPageStatus("expect");
  }, []);

  return (
    <>
      <main>
        <section className="expect content skinny">
          <h2 className="pageNameMobile">Treatments & What to Expect</h2>
          <div className="content-item">
            <p>
              Massages will always be tailored to you and what you need, and
              every appointment starts with a conversation to find out about
              your needs, preferences, symptoms and medical history.
            </p>

            <ul className="treatmentList">
              <p className="intro">The kinds of treatment I offer include:</p>
              <li>
                <div className="massageType">
                  <h3>Relaxing and holistic massage</h3>
                </div>
                which uses lighter strokes, aromatherapy essential oils and
                tends to be a full body massage
              </li>
              <li>
                <div className="massageType">
                  <h3> Deep tissue massage</h3>
                </div>
                which tends to also be full body but using slightly stronger
                pressure
              </li>
              <li>
                <div className="massageType">
                  <h3> Pregnancy and post natal massage</h3>
                </div>
                tailored towards the needs of pregnant people and new parents
              </li>
              <li>
                <div className="massageType">
                  <h3> Sports and remedial massage </h3>
                </div>
                which focuses on particular areas of concern / injuries and
                often uses more active approaches, longer consultation at the
                start and time for rehabilitation advice and exercises at the
                end.
              </li>
            </ul>
          </div>

          <div className="content-item">
            <p>
              During treatments I draw on a range of techniques and approaches
              which may include combining relaxing and holistic massage strokes,
              deeper tissue techniques, mobilisation, myofascial release,
              stretching and take-home or exercise advice as needed; the
              pressure I use will be guided by dialogue between us. My approach
              draws on the understanding of anatomy and physiology, pathology,
              biomechanics and rehabilitation that underpin my training in
              osteopathy.
            </p>

            <p>
              My practice aims to be actively consent led, body neutral /
              positive, gender and sexuality affirmative and anti-racist; I try
              to be aware of the influence of my own embodied experiences - as a
              middle-class, queer, white woman - on my professional and personal
              interactions. In practice this means I communicate what to expect,
              ask questions where appropriate so that I don’t make assumptions.
              If I think you may benefit from treatment from someone else
              (another kind of practitioner, such as an acupuncturist, for
              instance) I will always recommend them to you too.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Expect;
