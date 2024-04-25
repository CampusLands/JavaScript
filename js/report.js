import "./components/clock.js";
import { getAllSpanishClients } from "./module/clients.js";

let queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async(e)=>{
    let {parentNode: {children: [, report]}}  = queryAboutTable6
    if(!report.innerHTML){
        let data = await getAllSpanishClients();
        let plantilla = "";
        data.forEach(val => {
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>${val.client_code} - ${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b># </b>${val.id}</p>
                        <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
                        <p><b>Telefono: </b>${val.phone}</p>
                        <p><b>Fax: </b>${val.fax}</p>
                        <p><b>Dirreciones: </b>${val.address1} ${val.address2}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                        <p><b>Region: </b>${val.region}</p>
                        <p><b>Pais: </b>${val.country}</p>
                        <p><b>Codigo postal: </b>${val.postal_code}</p>
                        <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                        <p><b>Limite de credito: </b>${val.limit_credit}</p>
                        </div>
                </div>
                
            </div>
            `;
        });
        report.innerHTML = plantilla;
    }
})