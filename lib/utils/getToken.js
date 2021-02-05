import axios from 'axios';

export const getToken = async (token) => {
    let credential = {
        grant_type: "client_credentials",
        client_id: 2,
        client_secret: "<CLIENT_SECRET>",
    }
    let { data } = await axios({url: "<YOUR_URI>", method: 'POST', data: credential});
    return data.access_token;
}


{/* <DatePicker
            name="dob"
            className="form-control"
            placeholder="Date of birth"
            wrapperClassName="w-100"
            selected={values.dob && new Date(values.dob)}
            touched={touched}
            errors={errors}
            setFieldValue={setFieldValue}
            label="date of birth"
            peekNextMonth={true}
            showMonthDropdown={true}
            showYearDropdown={true}
            dropdownMode={`select`}
            maxDa */}