import React from 'react';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { questions } from './data.js';
import './Faq.css';
import Question from './Question.js';


function Faq() {



  return (
    <section id="faq">
      <div className="container faq">
        <div className="faq-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>سوالات متداول</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        </div>

        <div className="questions">
          {
            questions && questions.map((question) =>
             <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
             />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Faq;
