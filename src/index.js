import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import "./App.css";

const Basic = () => (
  <div>
    <h1>Contact Jennifer</h1>

    <Formik
      initialValues={{
        Name: "",
        Contact: "",
        Message: "",
        toggle: false,
        checked: []
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form align="center">
        <label htmlFor="Name" class="Name">
          Name:{" "}
        </label>
        <Field id="Name" name="Name" class="name" placeholder="Your Name" />

        {}
        <div id="checkbox-group" class="checkbox-head">
          <h3>Preferred Method Of Contact:</h3>
          <p>(Please choose at least one)</p>
          <div class="checkbox-group">
            <div>
              <label>
                <Field
                  class="checkPhone"
                  id="checkPhone"
                  type="checkbox"
                  name="checked"
                  value="text"
                />
                Phone
              </label>
              <Field
                class="phone"
                type="phone"
                name="phone"
                placeholder="(555)555-5555"
              />

              <label>
                <Field
                  class="checkText"
                  id="checkText"
                  type="checkbox"
                  name="checked"
                  value="Text"
                />
                Text
              </label>
              <Field
                class="text"
                type="phone"
                name="phone"
                placeholder="(555)555-5555"
              />
            </div>

            <div>
              <label>
                <Field
                  class="checkEmail"
                  id="checkEmail"
                  type="checkbox"
                  name="checked"
                  value="Email"
                />
                Email
              </label>
              <Field
                class="email"
                type="email"
                name="email"
                placeholder="youremail@email.com"
              />

              <label>
                <Field
                  class="checkOther"
                  id="checkOther"
                  type="checkbox"
                  name="checked"
                  value=" "
                />
                Other
              </label>
              <Field class="other" type="text" name="other" placeholder=" " />
            </div>
          </div>
        </div>

        <label htmlFor="text-area" class="message">
          {" "}
          Message:{" "}
        </label>

        <Field
          component="textarea"
          rows="4"
          id="Message"
          placeholder="Your Message Here"
          name="Message"
          required
        />
        <div>
          <button type="submit" class="submit">
            {" "}
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
