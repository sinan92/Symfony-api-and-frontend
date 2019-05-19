"use strict";

import PersonController from './controller/PersonController';
import PersonModel from './model/PersonModel';
import PersonView from './view/PersonView';
import PersonsView from './view/PersonsView';
import ExceptionView from './view/ExceptionView';


window.addEventListener("load", handleWindowLoad);

function handleWindowLoad() {
    let btnGETPersons = document.getElementById("btngetpersons");
    btnGETPersons.addEventListener("click", handleClickGetAllPersons);
    let btnPUTPerson = document.getElementById("btnputidname");
    btnPUTPerson.addEventListener("click", handleClickPUTPerson);
}

function handleClickGetAllPersons() {
  let personView=new PersonView();
  let personsView=new PersonsView();
  let exceptionView=new ExceptionView();
  let personModel=new PersonModel('http://192.168.33.22/api/persons/');
  let personController=new PersonController(personModel,personView,personsView,exceptionView);
  personController.findPersons();
}

function handleClickPUTPerson() {
    let personView=new PersonView();
    let personsView=new PersonsView();
    let exceptionView=new ExceptionView();
    let personModel=new PersonModel('http://192.168.33.22/api/persons/');
    let personController=new PersonController(personModel,personView,personsView,exceptionView);
    let id=document.getElementById("txtid").value;
    let name=document.getElementById("txtname").value;
    personController.addPersonByIdAndName(id,name);
}
