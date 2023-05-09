import {isEqual} from 'lodash';

const useSignup = () => {
  const useValidateSignup = (
    input: any,
    setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    if (
      input?.email?.length > 0 &&
      input?.password?.length > 0 &&
      input?.passwordConfirm?.length > 0 &&
      isEqual(input?.password, input?.passwordConfirm)
    ) {
      setIsDisabled(false);
      return;
    }
    setIsDisabled(true);
    return;
  };

  return {
    useValidateSignup,
  };
};

export default useSignup;
