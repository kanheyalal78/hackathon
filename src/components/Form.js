import React, { useRef } from "react";
import classes from "./Form.module.css";
const Form = () => {
  const random = useRef();
  const clickHandler = () => {
    random.current.click();
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        {/* <div className={classes.heading}>random heading</div> */}
        <div className={classes.form}>
          <h5 className={classes.head}>Your details</h5>
          <div className={classes.box}>
            <input placeholder="Branch" className={classes.input} />
            <input placeholder="Semester" className={classes.input} />
          </div>
          <div className={classes.box}>
            <input placeholder="Contact no" className={classes.input} />
            <input placeholder="Address" className={classes.input} />
          </div>
        </div>
        <div className={classes.form}>
          <h5 className={classes.head}>Book details</h5>
          <div className={classes.box}>
            <input placeholder="Name" className={classes.input} />
            <input placeholder="Author" className={classes.input} />
          </div>
          <div className={classes.box}>
            <textarea
              name="w3review"
              placeholder="Decription"
              rows="2"
              cols="50"
              className={classes.text}
            />
          </div>
          <div className={classes.boxx}>
            <div className={classes.xy}>
              <input placeholder="Sell price" className={classes.iinput1} />
              <input placeholder="Rent price" className={classes.iinput} />
            </div>

          </div>
          <div className={classes.xyz}>
              <input type="file" ref={random} />
              <button onClick={clickHandler}><p>+</p>Pick an image</button>
            </div>
        </div>
        <div className={classes.btnSubmit}>
        <button className={classes.button} role="button">Submit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
