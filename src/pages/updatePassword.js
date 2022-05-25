import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import FullPageWrapper from "../components/ui/fullPageWrapper";
import Card from "../components/ui/card";
import LargeInput from "../components/login/largeInput";
import BigButton from "../components/ui/bigButton";
import ErrorCard from "../components/ui/errorCard";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import UpdateFormWrapper from "../components/updatePassword/updateFormWrapper";
import Success from "../components/updatePassword/success";

const UpdatePassword = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [updated, setUpdated] = useState(false);

  const { register, getValues, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const checkPassword = function (password) {
    if (
      password.length > 8 &&
      password.match(/[A-Z]/) &&
      password.match(/[a-z]/) &&
      password.match(/[0-9]/) &&
      password.match(/[!@#$%^&*_-]/) &&
      !password.includes("singit")
    )
      return true;
    return false;
  };

  useEffect(() => {
    let code = searchParams.get('code');
    if (!code) {
      setError('Please try pressing reset password again in the login page to get a new link')
    }
  }, [searchParams]);

  const submit = () => {
    setError('');
    setLoading(true);
    let form = getValues();
    if (form.password !== form.repeat) {
      setError('Please make sure you repeat the password correctly');
      setLoading(false);
      return;
    } else if (!checkPassword(form.password)) {
      setError('Please make sure the new password is strong enough');
      setLoading(false);
      return;
    }

    axios.post("/users/updatePass", { code: searchParams.get('code'), password: form.password })
      .then(result => {
        setUpdated(true);
        setLoading(false);
      }).catch(err => {
        setError('Something went wrong - please try again');
        setLoading(false);
      })
  };

  return <FullPageWrapper>
    <Card>
      {!updated && <UpdateFormWrapper onSubmit={handleSubmit(submit)}>
        <h1>Create a new Password</h1>
        <p>Password must be at least 8 characters long, containing a mix of uppercase letters, lowercase letters, numbers and special characters (!@#$%^&*_-)</p>
        <br />
        <LargeInput placeholder="New password" {...register('password')} type="password" autoComplete="new-password" tabIndex={0} />
        <LargeInput placeholder="Repeat password" {...register('repeat')} type="password" autoComplete="new-password" tabIndex={0} />
        <BigButton type="submit" onClick={submit} loading={loading} tabIndex={0}>Save</BigButton>
        {error && <ErrorCard>{error}</ErrorCard>}
      </UpdateFormWrapper>}
      {updated && <Success />}
    </Card>
  </FullPageWrapper>
};

export default UpdatePassword;
