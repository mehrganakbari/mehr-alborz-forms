import JustValidate from "just-validate";

const validate = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
});

// username
validate.addField("#Username", [{
    rule: "required",
    errorMessage: "نام کاربری را وارد کنید",
  },
  {
    rule: "minLength",
    value: 3,

  },
  {
    rule: "maxLength",
    value: 30,
  },
])

// Password
validate.addField("#Password", [{
    rule: "required",
    errorMessage: "رمزعبور  را وارد کنید",
  },
  {
    rule: "minLength",
    value: 8,
    errorMessage: "رمزعبور را به درستی وارد کنید",
  },
  {
    rule: "maxLength",
    value: 10,
    errorMessage: "رمزعبور را بین 8 تا 10 کارکتر را انتخاب کنید",
  },
])

// Confirm Password
validate.addField('#ConfirmPassword', [{
    rule: "required",
    errorMessage: "رمزعبور خود را تایید کنید",
  },
  {
    validator: (value, fields) => {
      if (fields['#ConfirmPassword'] && fields['#Password'].elem) {
        const repeatPasswordValue = fields['#Password'].elem.value;

        return value === repeatPasswordValue;
      }

      return true;
    },
    errorMessage: 'رمزعبور تایید شده با رمزعبور انتخابی شما همخوانی ندارد',
  },
]);

// Email
validate.addField("#Email", [{
    rule: "required",
    errorMessage: "ایمیل را وارد کنید",
  },
  {
    rule: "email",
    errorMessage: "ایمیل را به درستی وارد کنید",
  },
]);

// Confirm Email
validate.addField('#ConfirmEmail', [{
    rule: "required",
    errorMessage: "ایمیل خود را تایید کنید",
  },
  {
    validator: (value, fields) => {
      if (fields['#ConfirmEmail'] && fields['#Email'].elem) {
        const repeatPasswordValue = fields['#Email'].elem.value;

        return value === repeatPasswordValue;
      }

      return true;
    },
    errorMessage: 'ایمیل تایید شده با ایمیل انتخابی شما همخوانی ندارد',
  },
]);

// FirstName
validate.addField("#FirstName", [{
    rule: "required",
    errorMessage: "نام خود را وارد کنید",
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: "نام خود را به درستی وارد کنید",
  },
  {
    rule: "maxLength",
    value: 30,
    errorMessage: "نام خود را به درستی وارد کنید",
  },
])

// LastName
validate.addField("#LastName", [{
    rule: "required",
    errorMessage: "نام خانوادگی خود را وارد کنید",
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: "نام خانوادگی خود را به درستی وارد کنید",
  },
  {
    rule: "maxLength",
    value: 30,
    errorMessage: "نام خانوادگی خود را به درستی وارد کنید",
  },
])

// Nationality
validate.addField('#Nationality', [{
  rule: 'required',
  errorMessage: "کشور  خود را انتخاب کنید",
}, ])

// Gender
validate.addField('#Gender', [{
  rule: 'required',
  errorMessage: "جنسیت  خود را تایین کنید",
}, ])

// City
validate.addField("#City", [{
  rule: "required",
  errorMessage: "نام شهر خود را وارد کنید",
}, ])

// PhoneNumber
validate.addField("#PhoneNumber", [{
    rule: "required",
    errorMessage: "شماره تماس  را وارد کنید",
  },
  {
    rule: "minLength",
    value: 11,
    errorMessage: "شماره تماس خود را به درستی وارد کنید",
  },
  {
    rule: "maxLength",
    value: 11,
    errorMessage: "شماره تماس خود را به درستی وارد کنید",
  },
])

// Department
validate.addField("#Department", [{
  rule: "required",
  errorMessage: "عنوان سازمان خود را وارد کنید",
}, ])

// File
validate.addField('#File', [{
    rule: "required",
    errorMessage: "تصویر خود را وارد کنید",
  },
  {
    rule: 'minFilesCount',
    value: 1,
  },
  {
    rule: 'maxFilesCount',
    value: 1,
  },
  {
    rule: 'files',
    value: {
      files: {
        extensions: ['jpeg', 'png'],
        maxSize: 25000,
        minSize: 1000,
      },
    },
  },
]);

validate.onSuccess((event) => {
  const newBox = document.getElementById("newAccountBox");
  const name = document.getElementById("Username");
  newBox.style.display = "block";
  alert(name + "عزیز" + "<br/>" + "ما در حال ساخت حساب کاربری جدید شما هستیم");
});