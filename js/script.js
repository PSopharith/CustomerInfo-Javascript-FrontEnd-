
        function GetCustomer1(){
            let strCusID, strCusName, strCusSex, strCusAddr1, strCusAddr2 = "N/A", strCusCity, strCusState, strCusZip, strCusInfo;
            strCusID = document.getElementById("txtCusID").value;
            strCusName = document.getElementById("txtCusName").value;
            if (document.getElementById("rdoMale").checked == true){
                strCusSex = document.getElementById("rdoMale").value;
            } else{
                strCusSex = document.getElementById("rdoFemale").value;
            }
            strCusAddr1 = document.getElementById("txtCusAddr1").value;
            if(document.getElementById("txtCusAddr2").value !== ""){
                strCusAddr2 = document.getElementById("txtCusAddr2").value;
            }else{
                strCusAddr2 ="N/A";
            }
            strCusCity = document.getElementById("txtCusCity").value;
            strCusState = document.getElementById("txtCusState").value;
            strCusZip = document.getElementById("txtCusZip").value;
            strCusInfo ="<tr><td>"+strCusID
                +"</td><td>"+strCusName
                +"</td><td>"+strCusSex
                +"</td><td>"+strCusAddr1
                +"</td><td>"+strCusAddr2
                +"</td><td>"+strCusCity
                +"</td><td>"+strCusState
                +"</td><td>"+strCusZip
                +"</td></tr>";
            document.getElementById("lstCustomer").innerHTML += strCusInfo;        
        }
        
        function GetCustomer2(){
            let strCusID = document.getElementById("txtCusID").value;
            let strCusName = document.getElementById("txtCusName").value;
            let strCusSex,strCusAddr2;
            let strCusAddr1 = document.getElementById("txtCusAddr1").value;
            let strCusCity = document.getElementById("txtCusCity").value;
            let strCusState = document.getElementById("cboCusState").value;
            let strCusZip = document.getElementById("txtCusZip").value;
            
            if (document.getElementById("rdoMale").checked == true){
                strCusSex = document.getElementById("rdoMale").value;
            } else{
                strCusSex = document.getElementById("rdoFemale").value;
            }
            if(document.getElementById("txtCusAddr2").value !== ""){
                strCusAddr2 = document.getElementById("txtCusAddr2").value;
            }else{
                strCusAddr2 ="N/A";
            }
            
           /* strCusInfo ="<tr><td>"+objCustomer.cusID
                +"</td><td>"+objCustomer.cusName
                +"</td><td>"+objCustomer.cusSex
                +"</td><td>"+objCustomer.cusAddr1
                +"</td><td>"+objCustomer.cusAddr2
                +"</td><td>"+objCustomer.cusCity
                +"</td><td>"+objCustomer.cusState
                +"</td><td>"+objCustomer.cusZip
                +"</td></tr>"; */
            if(strCusID ===""){
                alert("Customer's ID Required!");
                document.getElementById("txtCusID").focus();
            }else if (strCusName ===""){
                alert("Customer's Name Required!");
                document.getElementById("txtCusName").focus();
            }else if(strCusAddr1 ===""){
                alert("Customer's Address Required!");
                document.getElementById("txtCusAddr1").focus();
            }else if(strCusCity ===""){
                alert("Customer's City Required!");
                document.getElementById("txtCusCity").focus();
            }else if(strCusZip ===""){
                alert("Customer's Zip Code Required!");
                document.getElementById("txtCusZip").focus();     
            }else{
                let objCustomer = {
                        cusID: strCusID,
                        cusName: strCusName,
                        cusSex: strCusSex,
                        cusAddr1: strCusAddr1,
                        cusAddr2: strCusAddr2,
                        cusCity: strCusCity,
                        cusState: strCusState,
                        cusZip: strCusZip,
                        cusInfo: function(){
                            let strResult = "<tr><td>"+this.cusID
                            +"</td><td>"+this.cusName
                            +"</td><td>"+this.cusSex
                            +"</td><td>"+this.cusAddr1
                            +"</td><td>"+this.cusAddr2
                            +"</td><td>"+this.cusCity
                            +"</td><td>"+this.cusState
                            +"</td><td>"+this.cusZip
                            +"</td></tr>";
                            return strResult;
                        }
                    };
                document.getElementById("lstCustomer").innerHTML += objCustomer.cusInfo();        
                //document.getElementById("lstCustomer").innerHTML += strCusInfo;
                fnReset();
            } 
        }

    function onLoad(){
        let arrState = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN',
                        'IA','KS','KY','LA','ME','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM',
                        'NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA',
                        'WV','WI','WY'];
        arrState.forEach(fillSelect);
        //document.getElementById("cboCusState").selectedIndex= "23";
        document.getElementById("cboCusState").value = "MN";
        document.getElementById("txtCusID").focus();
    }
    function fillSelect(value){
        let strState = "<option value="+value+">"+value+"</select>";
        document.getElementById("cboCusState").innerHTML += strState;
    }
    
    function fnReset(){
        document.getElementById("CustForm").reset(); 
        document.getElementById("cboCusState").value = "MN";
        document.getElementById("txtCusID").focus();
    }