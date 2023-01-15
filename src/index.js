import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Basic = () => (
  <div>
    <h1>Leave a Message</h1>
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
      <Form>
        <label htmlFor="Name">Name: </label>
        <Field id="Name" name="Name" placeholder="Your Name" />
        <div>_</div>

        {}
        <div id="checkbox-group">Preferred Method Of Contact:</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="checked" value="Phone" />
            Phone
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Text" />
            Text
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Email" />
            Email
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Other" />
            Other
          </label>
        </div>
        <div>_</div>

        <label htmlFor="phone"> Phone: </label>
        <Field type="phone" name="phone" placeholder="#" />

        <label htmlFor="text"> Text: </label>
        <Field type="phone" name="phone" placeholder="#" />

        <div>_</div>
        <div>
          <label htmlFor="email"> Email: </label>
          <Field type="email" name="email" placeholder="youremail@email.com" />
        </div>

        <div>_</div>
        <label htmlFor="text-area"> Message: </label>

        <Field
          component="textarea"
          rows="4"
          id="Message"
          placeholder="Your Message Here"
          name="Message"
          required
        />

        <div>_</div>
        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
