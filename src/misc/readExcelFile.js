const xlsx = require('xlsx')
const callSnackbar = require('xlsx')
const setExcelStudentData = require('xlsx')
const setExcelTableopen = require('xlsx')
 
export const readExcelFile = (e) => {
    e.preventDefault();
    if(e.target.files[0].name.includes('xlsx')||e.target.files[0].name.includes('xls')){
      if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = xlsx.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          let headers=[
            'admissionNo',
            'fullName',
            'firstName',
            'lastName',
            'fathersName',
            'class',
            'section',
            'area',
            'gender',
            'address',
            'mobileNo',
            'dateOfBirth',
            'busID',
            'paymentStatus',
            'registered',
            'uid',
            'qrLink',
            'qrid',
            'studentId',
            'motherName',
            'admissionStatus',
            'motherMobileNo',
            'admissionDate',
            'hostelDaySch',
            'timeStamp'
          ]
          let correctExcel=true
          Object.keys(json[0]).map(function(keyName,index){
            if(!headers.includes(keyName)){
              console.log(keyName)
              correctExcel=false
            }
          })
          if(correctExcel){
            json.map((row) => {
              let uniqueqrid = `RAIKPSR${row.admissionNo}`;
              row["qrid"] = uniqueqrid;
              const ExcelDateToJSDate = (date) => {
                let converted_date = new Date(Math.round((date - 25569) * 864e5));
                converted_date = String(converted_date).slice(4, 15);
                date = converted_date.split(" ");
                let day = date[1];
                let month = date[0];
                month =
                  "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(month) / 3 + 1;
                if (month.toString().length <= 1) month = "0" + month;
                let year = date[2];
                if(!day||!month||!year)
                // callSnackbar(true,'error','date of birth and admissionDate needs to be in dd-mm-yyyy')
                return String(day + "-" + month + "-" + year?.slice(2, 4));
              };
              row.dateOfBirth = ExcelDateToJSDate(row.dateOfBirth);
              row.admissionDate = ExcelDateToJSDate(row.admissionDate);
              row["firstName"] = row.fullName.split(" ")[0];
              var values = row.fullName.split(" ");
              let lastNames = values[1]
                ? row.fullName.substr(row.fullName.indexOf(" ") + 1)
                : "";
              row["lastName"] = lastNames;
              setExcelStudentData((prev) => [...prev, row]);
            });
            setExcelTableopen(true);
          }
          else{
            // callSnackbar(true,'error','Please check the data in excel again')
          }

        };
        reader.readAsArrayBuffer(e.target.files[0]);
      }
    }
    else{
    //   callSnackbar(true,'error','Please add a file format in xlsx or xls')
    }
    
  };