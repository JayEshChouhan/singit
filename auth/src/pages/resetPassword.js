import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BigButton from "../components/ui/bigButton";
import Card from "../components/ui/card";
import FullPageWrapper from "../components/ui/fullPageWrapper";
import LargeInput from "../components/login/largeInput";
import ErrorCard from "../components/ui/errorCard";
import UpdateFormWrapper from "../components/updatePassword/updateFormWrapper";
import Success from "../components/updatePassword/success";

const ResetPassword = (props) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, getValues, handleSubmit } = useForm();

  useEffect(() => {
    document.title = "Singit - Forgot Password";
  }, []);

  const submit = () => {
    setLoading(true);
    let formValue = getValues();
    formValue.email = formValue.email.trim().toLowerCase();

    axios.post('/users/resetPass', formValue)
      .then(result => {
        setSent(true);
        setLoading(false);
      })
      .catch(err => {
        setError("Please check the email you entered is correct");
        setLoading(false);
      });
  }

  return <FullPageWrapper>
    <Card>
      {!sent && <UpdateFormWrapper onSubmit={handleSubmit(submit)}>
        <h1>Reset Password</h1>
        <p>Please wait for an email with further instructions.</p>
        <p>This might take 2-3 minutes</p>
        <LargeInput placeholder="Email" autoCapitalize="false" autoComplete="email" {...register('email')} />
        <BigButton type="submit" style={{ margin: "10px 0" }} onClick={submit} loading={loading}>Submit</BigButton>
        {error && <ErrorCard>{error}</ErrorCard>}
      </UpdateFormWrapper>}
      {sent && <Success />}
    </Card>
  </FullPageWrapper>
};

export default ResetPassword;