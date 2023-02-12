import React, { useState } from 'react'
import './ConditionForm.css'

const ConditionForm = () => {
  const FormState = {
    ConditionType: 0,
    Severity: 1,
    Location: 2,
    Time: 3,
    CompoundFracture: 4,
    Bleeding: 5,
    HeartHistory: 6,
  }

  const [formState, setFormState] = useState(FormState.ConditionType);
  const [conditionType, setCondtionType] = useState("");
  const [severity, setSeverity] = useState(1);
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [compoundFracture, setCompoundFracture] = useState(false);
  const [bleeding, setBleeding] = useState(false);
  const [heartHistory, setHeartHistory] = useState(false);
  const [yesOrNo, setYesOrNo] = useState("yes");

  const renderForm = () => {
    console.log(formState);
    switch (formState) {
      case FormState.ConditionType:
        return (
          <select name='conditionType'>
            <option value='BrokenBone'>Broken Bone</option>
            <option value='Infection'>UTI</option>
            <option value='ChestPain'>Chest Pain</option>
          </select>);
      case FormState.Severity:
        return (<input name='severity' type='number' min='1' max='10' step='1'></input>);
      case FormState.Location:
        return (<select name='location'>
          <option value='Head'>Head</option>
          <option value='Chest'>Chest</option>
          <option value='Arm'>Arm</option>
          <option value='Leg'>Leg</option>
          <option value='Hand'>Hand</option>
          <option value='Foot'>Foot</option>
        </select>);
      case FormState.Time:
        return (<input type='number' step='1' />);
      case FormState.CompoundFracture:
      case FormState.Bleeding:
      case FormState.HeartHistory:
        return (<></>);
      default:
        break;
    }
  }

  const renderFormLabel = () => {
    switch (formState) {
      case FormState.ConditionType:
        return (
          <h2>What type of issue are you having?</h2>
        );
      case FormState.Severity:
        return (
          <h2>On a scale from 1-10, how severe is it?</h2>
        );
      case FormState.Location:
        return (
          <h2>Where on your body is the issue occurring?</h2>
        );
      case FormState.Time:
        return (
          <h2>How many days has the issue been occurring?</h2>
        );
      case FormState.CompoundFracture:
        return (
          <h2>Is the broken bone sticking out?</h2>
        )
      case FormState.Bleeding:
        return (
          <h2>Are you bleeding?</h2>
        )
      case FormState.HeartHistory:
        return (
          <h2>Do you have a history of heart conditions?</h2>
        )
      default:
        break;
    }
  }

  const renderSubmit = () => {
    switch (formState) {
      case FormState.CompoundFracture:
      case FormState.Bleeding:
      case FormState.HeartHistory:
        return (
          <>
            <button
              onClick={() => setYesOrNo("yes")}
              className='submit-button'
              type='submit'
              name='yesButton'
              value='yes'>Yes</button>
            <button
              onClick={() => setYesOrNo("no")}
              className='submit-button'
              type='submit'
              name='noButton'
              value='no'>No</button>
          </>
        );
      default:
        return (
          <button className='submit-button' type='submit'>Next</button>
        );
    }
  }

  const getProviders = () => {
    console.log("getProviders()")
    let data = {}
    switch (conditionType) {
      case "BrokenBone":
        if (bleeding) {
          data = { providers: ["911"] };
        } else if (compoundFracture) {
          data = { providers: ["Emergency", "Urgent"] };
        } else {
          data = { providers: ["Urgent", "Emergency"] };
        }
        break;
      case "Infection":
        if (time > 14) {
          data = { providers: ["Walkin"] };
        } else {
          data = { providers: ["Pharmacy", "Walkin"] };
        }
        break;
      case "ChestPain":
        if (heartHistory || severity > 5) {
          data = { providers: ["911"] };
        } else {
          data = { providers: ["Emergency"] };
        }
        break;
      default:
        break;
    }
    if (data.providers[0] === "911") {
      handleEmergency();
    }
  }

  const handleEmergency = () => {
    alert("Call 911 Immediately!");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (formState) {
      case FormState.ConditionType:
        setCondtionType(event.target.conditionType.options[event.target.conditionType.selectedIndex].value);
        switch (event.target.conditionType.options[event.target.conditionType.selectedIndex].value) {
          case "BrokenBone":
          case "ChestPain":
            setFormState(FormState.Severity);
            break;
          case "Infection":
            setFormState(FormState.Severity);
            break;
          default:
            break;
        }
        break;
      case FormState.Severity:
        setSeverity(event.target.severity.value);
        switch (conditionType) {
          case "BrokenBone":
            setFormState(FormState.Location);
            break;
          case "ChestPain":
            setFormState(FormState.HeartHistory);
            break;
          case "Infection":
            setFormState(FormState.Time);
            break;
          default:
            break;
        }
        break;
      case FormState.Location:
        setLocation(event.target.location.options[event.target.location.selectedIndex].value);
        switch (conditionType) {
          case "BrokenBone":
            setFormState(FormState.CompoundFracture);
            break;
          default:
            break;
        }
        break;
      case FormState.Time:
        setTime(event.target.time.value);
        switch (conditionType) {
          case "Infection":
            getProviders();
            break;
          default:
            break;
        }
        break;
      case FormState.CompoundFracture:
        setCompoundFracture(yesOrNo === "yes");
        if (yesOrNo === "yes") {
          setFormState(FormState.Bleeding);
        } else {
          getProviders();
        }
        break;
      case FormState.Bleeding:
        setBleeding(yesOrNo === "yes");
        getProviders();
        break;
      case FormState.HeartHistory:
        setHeartHistory(yesOrNo === "yes");
        getProviders();
        break;
      default:
        break;
    }
  }

  return (
    <div className='condition-form-container'>
      <form className='condition-form' onSubmit={handleSubmit}>
        {renderFormLabel()}
        <div className='form-input'>
          {renderForm()}
          {renderSubmit()}
        </div>
      </form>
    </div>
  )
}

export default ConditionForm