import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class FAQ extends React.Component {
  render() {
      return (
        <div>
          <h3 id="faq-header">FAQ</h3>
          <h4 id="subheader">General</h4>
          <div className="container ">
            <div className="panel-group" id="faqAccordion">
                <div className="panel panel-default ">
                    <div className="panel-heading accordion-toggle question-toggle collapsed" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question0">
                        <h4 className="panel-title">
                            <a href="#" className="ing"><h3 className="faq-question">Q: What is 88 Keys?</h3></a>
                      </h4>

                    </div>
                    <div id="question0" className="panel-collapse collapse" style={{height: "0px"}}>
                        <div className="panel-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five <a href="http://jquery2dotnet.com/" className="label label-success">http://jquery2dotnet.com/</a> centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default ">
                    <div className="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question1">
                        <h4 className="panel-title">
                            <a href="#" className="ing"><h3 className="faq-question">Q: Why do we use it?</h3></a>
                      </h4>

                    </div>
                    <div id="question1" className="panel-collapse collapse" style={{height: "0px"}}>
                        <div className="panel-body">
                            <p className="faq-answer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default ">
                    <div className="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question2">
                        <h4 className="panel-title">
                            <a href="#" className="ing"><h3 className="faq-question">Q: Where does it come from?</h3></a>
                      </h4>

                    </div>
                    <div id="question2" className="panel-collapse collapse" style={{height: "0px"}}>
                        <div className="panel-body">
                            <p className="faq-answer">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default ">
                    <div className="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question3">
                        <h4 className="panel-title">
                            <a href="#" className="ing"><h3 className="faq-question">Q: Where can I get some?</h3></a>
                      </h4>

                    </div>
                    <div id="question3" className="panel-collapse collapse" style={{height: "0px"}}>
                        <div className="panel-body">
                            <p className="faq-answer">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    );
  }
}