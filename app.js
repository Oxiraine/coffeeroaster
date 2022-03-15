const prefContainer = document.querySelector('.preference-container');
const prefCardRows = document.querySelector('.preference-cards-row');
const prefUp = document.getElementById('pref1');
const prefDown = document.getElementById('pref2');
const prefBtn = document.querySelector('.top-text');
const prefHeaderCtrl = document.querySelector('.preference-plan-header');


const beanContainer = document.querySelector('.bean-container');
const beanCardRows = document.querySelector('.bean-cards-row');
const beanUp = document.getElementById('bean1');
const beanDown = document.getElementById('bean2');
const beanBtn = document.querySelector('.bean-name');
const beanHeaderCtrl = document.querySelector('.bean-plan-header');


const qtyContainer = document.querySelector('.quantity-container');
const qtyCardRows = document.querySelector('.quantity-cards-row');
const qtyUp = document.getElementById('qty1');
const qtyDown = document.getElementById('qty2');
const qtyHeaderCtrl = document.querySelector('.quantity-plan-header');


const grindContainer = document.querySelector('.grind-container');
const grindCardRows = document.querySelector('.grind-cards-row');
const grindUp = document.getElementById('grind1');
const grindDown = document.getElementById('grind2');
const grindHeaderCtrl = document.querySelector('.grind-plan-header');


const dlvyContainer = document.querySelector('.deliveries-container');
const dlvyCardRows = document.querySelector('.deliveries-cards-row');
const dlvyUp = document.getElementById('dlvy1');
const dlvyDown = document.getElementById('dlvy2');
const dlvyHeaderCtrl = document.querySelector('.deliveries-plan-header');

//Mobile menu toggle

const buttonOpen = document.querySelector('.fa-bars');
const buttonClose = document.querySelector('.fa-times');
const navItems = document.querySelector('.nav-items');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const planA = document.querySelector('.plan-a');

function showMenu(){
  buttonClose.style.display = 'block';
  buttonOpen.style.display = 'none';
  navItems.classList.add('nav-flip');
  home.style.display = 'block';
  about.style.display = 'block';
  planA.style.display = 'block';
}

function hideMenu(){
  buttonClose.style.display = 'none';
  buttonOpen.style.display = 'block';
  navItems.classList.remove('nav-flip');
  home.style.display = 'none';
  about.style.display = 'none';
  planA.style.display = 'none';
}
//When Preference Arrow Up is clicked

var pref1ButtonId  = ('#pref1');
prefUp.addEventListener('click', prefToggleDown);
function prefToggleDown(){
 if(pref1ButtonId = '#pref1'){
  prefCardRows.style.display = "none";
  prefUp.style.display = "none";
  prefDown.style.display = "inline";
  prefContainer.style.height = "10px";
  beanContainer.classList.remove('bean-container-addon');
 }
}

//When Preference Arrow Down is clicked
var pref2ButtonId = "#pref2";
prefDown.addEventListener('click', prefToggleUp);
function prefToggleUp(){
 if(pref2ButtonId = '#pref2'){
  prefCardRows.style.display = "flex";
  prefUp.style.display = "inline";
  prefDown.style.display = "none";
  prefContainer.style.height = "inherit";
  beanContainer.classList.add('bean-container-addon');
 }
}
// Control with Left Preference List 
prefBtn.addEventListener('click', prefBtnCtrl);
function prefBtnCtrl(){
  if(prefBtn.className === 'top-text'){
    prefToggleDown();
    prefBtn.classList.add('open');
    prefBtn.classList.remove('top-text');
  }else{
    prefToggleUp();
    prefBtn.classList.add('top-text');
    prefBtn.classList.remove('open');
  }
}
// Control with Preference Header
prefHeaderCtrl.addEventListener('click', prefHeaderFunction);
function prefHeaderFunction(){
  if(prefHeaderCtrl.className ==='preference-plan-header'){
    prefToggleDown();
    prefHeaderCtrl.classList.add('preference-plan-header-open');
    prefHeaderCtrl.classList.remove('preference-plan-header');
  }else{
    prefToggleUp();
    prefHeaderCtrl.classList.add('preference-plan-header');
    prefHeaderCtrl.classList.remove('preference-plan-header-open');
  }
}


//When Bean Arrow Down is clicked
var bean2ButtonId = "#bean2";
beanDown.addEventListener('click', beanToggleUp);
function beanToggleUp(){
 if(bean2ButtonId = '#bean2'){
  beanCardRows.style.display = "flex";
  beanUp.style.display = "inline";
  beanDown.style.display = "none";
  beanContainer.style.height = "inherit";
  qtyContainer.classList.add('quantity-container-addon');
 }
}

//When Bean Arrow Up is clicked
var bean1ButtonId = "#bean1";
beanUp.addEventListener('click', beanToggleDown);
function beanToggleDown(){
 if(bean1ButtonId = '#bean1'){
  beanCardRows.style.display = "none";
  beanUp.style.display = "none";
  beanDown.style.display = "inline";
  beanContainer.style.height = "10px";
  qtyContainer.classList.remove('quantity-container-addon');
 }
}

// Control with Left Bean List
beanBtn.addEventListener('click', beanBtnCtrl);
function beanBtnCtrl(){
  if(beanBtn.className == 'bean-name'){
    beanToggleUp();
    beanBtn.classList.add('bean-name-open');
    beanBtn.classList.remove('bean-name');
  }else{
    beanToggleDown();
    beanBtn.classList.add('bean-name');
    beanBtn.classList.remove('bean-name-open');
  }
  
}

// Control with Bean Header 
beanHeaderCtrl.addEventListener('click', beanHeaderFunction);
function beanHeaderFunction(){
  if(beanHeaderCtrl.className === 'bean-plan-header'){
    beanToggleUp();
    beanHeaderCtrl.classList.add('bean-plan-header-open');
    beanHeaderCtrl.classList.remove('bean-plan-header');
  }else{
    beanToggleDown();
    beanHeaderCtrl.classList.add('bean-plan-header');
    beanHeaderCtrl.classList.remove('bean-plan-header-open');
  }
}


//When Quantity Arrow Down is clicked
var qty2ButtonId = "#qty2";
qtyDown.addEventListener('click', qtyToggleUp);
function qtyToggleUp(){
 if(qty2ButtonId === '#qty2'){
  qtyCardRows.style.display = "flex";
  qtyUp.style.display = "inline";
  qtyDown.style.display = "none";
  qtyContainer.style.height = "inherit";
  grindContainer.classList.add('grind-container-addon');
 }
}

//When Quantity Arrow Up is clicked
var qty1ButtonId = "#qty1";
qtyUp.addEventListener('click', qtyToggleDown);
function qtyToggleDown(){
 if(qty1ButtonId === '#qty1'){
  qtyCardRows.style.display = "none";
  qtyUp.style.display = "none";
  qtyDown.style.display = "inline";
  qtyContainer.style.height = "10px";
  grindContainer.classList.remove('grind-container-addon');
 }
}

// Control with Left Quantity List
const qtyBtn = document.querySelector('.qty-name');
qtyBtn.addEventListener('click', qtyBtnCtrl);
function qtyBtnCtrl(){
  if(qtyBtn.className == 'qty-name'){
    qtyToggleUp();
    qtyBtn.classList.add('qty-name-open');
    qtyBtn.classList.remove('qty-name');
  }else{
    qtyToggleDown();
    qtyBtn.classList.add('qty-name');
    qtyBtn.classList.remove('qty-name-open');
  }  
}


// Control with Qty Header 
qtyHeaderCtrl.addEventListener('click', qtyHeaderFunction);
function qtyHeaderFunction(){
  if(qtyHeaderCtrl.className === 'quantity-plan-header'){
    qtyToggleUp();
    qtyHeaderCtrl.classList.add('quantity-plan-header-open');
    qtyHeaderCtrl.classList.remove('quantity-plan-header');
  }else{
    qtyToggleDown();
    qtyHeaderCtrl.classList.add('quantity-plan-header');
    qtyHeaderCtrl.classList.remove('quantity-plan-header-open');
  }
}

//When Grind Arrow Down is clicked
var grind2ButtonId = "#grind2";
grindDown.addEventListener('click', grindToggleUp);
function grindToggleUp(){
 if(grind2ButtonId === '#grind2'){
  grindCardRows.style.display = "flex";
  grindUp.style.display = "inline";
  grindDown.style.display = "none";
  grindContainer.style.height = "inherit";
  dlvyContainer.classList.add('deliveries-container-addon');
 }
 
}

//When Grind Arrow Up is clicked
var grind1ButtonId = "#grind1";
grindUp.addEventListener('click', grindToggleDown);
function grindToggleDown(){
 if(grind1ButtonId === '#grind1'){
  grindCardRows.style.display = "none";
  grindUp.style.display = "none";
  grindDown.style.display = "inline";
  grindContainer.style.height = "10px";
  dlvyContainer.classList.remove('deliveries-container-addon');
 }
}

// Control with Left Grind List
const grindBtn = document.querySelector('.grind-name');
grindBtn.addEventListener('click', grindBtnCtrl);
function grindBtnCtrl(){
  if(grindBtn.className == 'grind-name'){
    grindToggleUp();
    grindBtn.classList.add('grind-name-open');
    grindBtn.classList.remove('grind-name');
  }else{
    grindToggleDown();
    grindBtn.classList.add('grind-name');
    grindBtn.classList.remove('grind-name-open');
  }  
}

// Control with Grind Header 
grindHeaderCtrl.addEventListener('click', grindHeaderFunction);
function grindHeaderFunction(){
  if(grindHeaderCtrl.className === 'grind-plan-header'){
    grindToggleUp();
    grindHeaderCtrl.classList.add('grind-plan-header-open');
    grindHeaderCtrl.classList.remove('grind-plan-header');
  }else{
    grindToggleDown();
    grindHeaderCtrl.classList.add('grind-plan-header');
    grindHeaderCtrl.classList.remove('grind-plan-header-open');
  }
}

//When Deleiveries Arrow Down is clicked
var dlvy2ButtonId = "#dlvy2";
dlvyDown.addEventListener('click', dlvyToggleUp);
function dlvyToggleUp(){
 if(dlvy2ButtonId === '#dlvy2'){
  dlvyCardRows.style.display = "flex";
  dlvyUp.style.display = "inline";
  dlvyDown.style.display = "none";
  dlvyContainer.style.height = "400px";
 }
}

//When Deleiveries Arrow Up is clicked
var dlvy1ButtonId = "#dlvy1";
dlvyUp.addEventListener('click', dlvyToggleDown);
function dlvyToggleDown(){
 if(dlvy1ButtonId === '#dlvy1'){
  dlvyCardRows.style.display = "none";
  dlvyUp.style.display = "none";
  dlvyDown.style.display = "inline";
  dlvyContainer.style.height = "10px";
 }
}

// Control with Left Deliveries List
const dlvyBtn = document.querySelector('.dlry-name');
dlvyBtn.addEventListener('click', dlvyBtnCtrl);
function dlvyBtnCtrl(){
  if(dlvyBtn.className == 'dlry-name'){
    dlvyToggleUp();
    dlvyBtn.classList.add('dlry-name-open');
    dlvyBtn.classList.remove('dlry-name');
  }else{
    dlvyToggleDown();
    dlvyBtn.classList.add('dlry-name');
    dlvyBtn.classList.remove('dlry-name-open');
  }  
}
// Control with Deliveries Header 
dlvyHeaderCtrl.addEventListener('click', dlvyHeaderFunction);
function dlvyHeaderFunction(){
  if(dlvyHeaderCtrl.className === 'deliveries-plan-header'){
    dlvyToggleUp();
    dlvyHeaderCtrl.classList.add('deliveries-plan-header-open');
    dlvyHeaderCtrl.classList.remove('deliveries-plan-header');
  }else{
    dlvyToggleDown();
    dlvyHeaderCtrl.classList.add('deliveries-plan-header');
    dlvyHeaderCtrl.classList.remove('deliveries-plan-header-open');
  }
}

// Adding Preference Selection To Order Summary
const prefCards = document.querySelector('.preference-cards');
const capsules = document.querySelector('.preference1');
const filter = document.querySelector('.preference2');
const espresso = document.querySelector('.preference3');
const capsuleHeader = document.querySelector('.plan-card1-header');
const capsuleDesc = document.querySelector('.plan-card1-desc');
const filterHeader = document.querySelector('.plan-card2-header');
const filterDesc = document.querySelector('.plan-card2-desc');
const espHeader = document.querySelector('.plan-card3-header');
const espDesc = document.querySelector('.plan-card3-desc');


let newPref = document.getElementById('green')
capsules.addEventListener('click', changeCapState);
function changeCapState(e) {
  if(e.target.id = 'pref-card1'){
    capsules.style.backgroundColor = "#0E8784";
capsuleHeader.style.color = "#FEFCF7";
capsuleDesc.style.color = "#FEFCF7";
filter.style.backgroundColor = "#F4F1EB";
  filterHeader.style.color = "#333D4B";
  filterDesc.style.color = "#333D4B";
  espresso.style.backgroundColor = "#F4F1EB";
  espHeader.style.color = "#333D4B";
  espDesc.style.color = "#333D4B";
  newPref.textContent="Capsules";
}
}
filter.addEventListener('click', changeFilState);
function changeFilState(e){
  if(e.target.id = 'pref-card2'){
filter.style.backgroundColor = "#0E8784";
  filterHeader.style.color = "#FEFCF7";
  filterDesc.style.color = "#FEFCF7";
  capsules.style.backgroundColor = "#F4F1EB";
capsuleHeader.style.color = "#333D4B";
capsuleDesc.style.color = "#333D4B";
espresso.style.backgroundColor = "#F4F1EB";
  espHeader.style.color = "#333D4B";
  espDesc.style.color = "#333D4B";
newPref.textContent = "Filter"
  }
}

espresso.addEventListener('click', changeEspState);
function changeEspState(e){
  if(e.target.id = 'pref-card3'){
espresso.style.backgroundColor = "#0E8784";
  espHeader.style.color = "#FEFCF7";
  espDesc.style.color = "#FEFCF7";
  filter.style.backgroundColor = "#F4F1EB";
  filterHeader.style.color = "#333D4B";
  filterDesc.style.color = "#333D4B";
  capsules.style.backgroundColor = "#F4F1EB";
capsuleHeader.style.color = "#333D4B";
capsuleDesc.style.color = "#333D4B";
newPref.textContent = "Espresso";
  }
}


// Adding Bean Selection To Order Summary
const beanCards = document.querySelector('.bean-container');
const singleOrigin = document.querySelector('.bean-card1');
const decaf = document.querySelector('.bean-card2');
const blended = document.querySelector('.bean-card3');
const singleHeader = document.querySelector('.bean-card1-header');
const singleDesc = document.querySelector('.bean-card1-desc');
const decafHeader = document.querySelector('.bean-card2-header');
const decafDesc = document.querySelector('.bean-card2-desc');
const blendedHeader = document.querySelector('.bean-card3-header');
const blendedDesc = document.querySelector('.bean-card3-desc');


let newBean = document.getElementById('green-bean')
singleOrigin.addEventListener('click', changeOriginState);
function changeOriginState(e) {
  if(e.target.id = 'bean-card1'){
    singleOrigin.style.backgroundColor = "#0E8784";
singleHeader.style.color = "#FEFCF7";
singleDesc.style.color = "#FEFCF7";
decaf.style.backgroundColor = "#F4F1EB";
  decafHeader.style.color = "#333D4B";
  decafDesc.style.color = "#333D4B";
  blended.style.backgroundColor = "#F4F1EB";
  blendedHeader.style.color = "#333D4B";
  blendedDesc.style.color = "#333D4B";
  newBean.textContent="Single Origin ";
}
}
decaf.addEventListener('click', changeDecafState);
function changeDecafState(e){
  if(e.target.id = 'bean-card2'){
    decaf.style.backgroundColor = "#0E8784";
    decafHeader.style.color = "#FEFCF7";
    decafDesc.style.color  = "#FEFCF7";
  singleOrigin.style.backgroundColor = "#F4F1EB";
singleHeader.style.color = "#333D4B";
singleDesc.style.color = "#333D4B";
blended.style.backgroundColor = "#F4F1EB";
  blendedHeader.style.color = "#333D4B";
  blendedDesc.style.color = "#333D4B";
newBean.textContent = "Decaf "
  }
}

blended.addEventListener('click', changeBlendedState);
function changeBlendedState(e){
  if(e.target.id = 'bean-card3'){
blended.style.backgroundColor = "#0E8784";
  blendedHeader.style.color = "#FEFCF7";
  blendedDesc.style.color = "#FEFCF7";
  singleOrigin.style.backgroundColor = "#F4F1EB";
  singleHeader.style.color = "#333D4B";
  singleDesc.style.color = "#333D4B";
  decaf.style.backgroundColor = "#F4F1EB";
decafHeader.style.color = "#333D4B";
decafDesc.style.color = "#333D4B";
newBean.textContent = "Blended";
  }
}



// Adding Quantity Selection To Order Summary
const qtyCards = document.querySelector('.quantity-container');
const qty1 = document.querySelector('.quantity-card1');
const qty2 = document.querySelector('.quantity-card2');
const qty3 = document.querySelector('.quantity-card3');
const qty1Header = document.querySelector('.quantity-card1-header');
const qty1Desc = document.querySelector('.quantity-card1-desc');
const qty2Header = document.querySelector('.quantity-card2-header');
const qty2Desc = document.querySelector('.quantity-card2-desc');
const qty3Header = document.querySelector('.quantity-card3-header');
const qty3Desc = document.querySelector('.quantity-card3-desc');


let newQty = document.getElementById('green-qty')
qty1.addEventListener('click', changeQty1State);
function changeQty1State(e) {
  if(e.target.id = 'qty-card1'){
    qty1.style.backgroundColor = "#0E8784";
qty1Header.style.color = "#FEFCF7";
qty1Desc.style.color = "#FEFCF7";
qty2.style.backgroundColor = "#F4F1EB";
  qty2Header.style.color = "#333D4B";
  qty2Desc.style.color = "#333D4B";
  qty3.style.backgroundColor = "#F4F1EB";
  qty3Header.style.color = "#333D4B";
  qty3Desc.style.color = "#333D4B";
  newQty.textContent="250g";
}
}
qty2.addEventListener('click', changeQty2State);
function changeQty2State(e){
  if(e.target.id = 'qty-card2'){
    qty2.style.backgroundColor = "#0E8784";
    qty2Header.style.color = "#FEFCF7";
    qty2Desc.style.color = "#FEFCF7";
    qty1.style.backgroundColor = "#F4F1EB";
      qty1Header.style.color = "#333D4B";
      qty1Desc.style.color = "#333D4B";
      qty3.style.backgroundColor = "#F4F1EB";
      qty3Header.style.color = "#333D4B";
      qty3Desc.style.color = "#333D4B";
      newQty.textContent="500g";
  }
}

qty3.addEventListener('click', changeQty3State);
function changeQty3State(e){
  if(e.target.id = 'qty-card3'){
    qty3.style.backgroundColor = "#0E8784";
    qty3Header.style.color = "#FEFCF7";
    qty3Desc.style.color = "#FEFCF7";
    qty2.style.backgroundColor = "#F4F1EB";
      qty2Header.style.color = "#333D4B";
      qty2Desc.style.color = "#333D4B";
      qty1.style.backgroundColor = "#F4F1EB";
      qty1Header.style.color = "#333D4B";
      qty1Desc.style.color = "#333D4B";
      newQty.textContent="1000g";
  }
}


// Adding Grind Selection To Order Summary
const grindCards = document.querySelector('.grind-container');
const wholeBean = document.querySelector('.grind-card1');
const  grindFilter= document.querySelector('.grind-card2');
const cafetiere = document.querySelector('.grind-card3');
const wholeBeanHeader = document.querySelector('.grind-card1-header');
const wholeBeanDesc = document.querySelector('.grind-card1-desc');
const grindFilterHeader = document.querySelector('.grind-card2-header');
const grindFilterDesc = document.querySelector('.grind-card2-desc');
const cafetiereHeader = document.querySelector('.grind-card3-header');
const cafetiereDesc = document.querySelector('.grind-card3-desc');

let newGrind = document.getElementById('green-grind')
wholeBean.addEventListener('click', changeGrindState);
function changeGrindState(e) {
  if(e.target.id = 'grind-card1'){
    wholeBean.style.backgroundColor = "#0E8784";
wholeBeanHeader.style.color = "#FEFCF7";
wholeBeanDesc.style.color = "#FEFCF7";
grindFilter.style.backgroundColor = "#F4F1EB";
  grindFilterHeader.style.color = "#333D4B";
  grindFilterDesc.style.color = "#333D4B";
  cafetiere.style.backgroundColor = "#F4F1EB";
  cafetiereHeader.style.color = "#333D4B";
  cafetiereDesc.style.color = "#333D4B";
  newGrind.textContent=" Wholebean";
}
}
grindFilter.addEventListener('click', changeGrindFilState);
function changeGrindFilState(e){
  if(e.target.id = 'grind-card2'){
    grindFilter.style.backgroundColor = "#0E8784";
    grindFilterHeader.style.color = "#FEFCF7";
    grindFilterDesc.style.color = "#FEFCF7";
    wholeBean.style.backgroundColor = "#F4F1EB";
      wholeBeanHeader.style.color = "#333D4B";
      wholeBeanDesc.style.color = "#333D4B";
      cafetiere.style.backgroundColor = "#F4F1EB";
      cafetiereHeader.style.color = "#333D4B";
      cafetiereDesc.style.color = "#333D4B";
      newGrind.textContent=" Filter";
  }
}

cafetiere.addEventListener('click', changeCafeState);
function changeCafeState(e){
  if(e.target.id = 'grind-card3'){
    cafetiere.style.backgroundColor = "#0E8784";
    cafetiereHeader.style.color = "#FEFCF7";
    cafetiereDesc.style.color = "#FEFCF7";
    wholeBean.style.backgroundColor = "#F4F1EB";
      wholeBeanHeader.style.color = "#333D4B";
      wholeBeanDesc.style.color = "#333D4B";
      grindFilter.style.backgroundColor = "#F4F1EB";
      grindFilterHeader.style.color = "#333D4B";
      grindFilterDesc.style.color = "#333D4B";
      newGrind.textContent=" Cafetiere";
  }
}

// Adding Delivery Selection To Order Summary
const dlry1 = document.querySelector('.deliveries-card1');
const  dlry2= document.querySelector('.deliveries-card2');
const dlry3 = document.querySelector('.deliveries-card3');
const dlry1Header = document.querySelector('.deliveries-card1-header');
const dlry1Desc = document.querySelector('.deliveries-card1-desc');
const dlry2Header = document.querySelector('.deliveries-card2-header');
const dlry2Desc = document.querySelector('.deliveries-card2-desc');
const dlry3Header = document.querySelector('.deliveries-card3-header');
const dlry3Desc = document.querySelector('.deliveries-card3-desc');

let newDlry = document.getElementById('green-dlvry');
dlry1.addEventListener('click', changeDlry1State);
function changeDlry1State(e) {
  if(e.target.id = 'dlry-card1'){
    dlry1.style.backgroundColor = "#0E8784";
dlry1Header.style.color = "#FEFCF7";
dlry1Desc.style.color = "#FEFCF7";
dlry2.style.backgroundColor = "#F4F1EB";
  dlry2Header.style.color = "#333D4B";
  dlry2Desc.style.color = "#333D4B";
  dlry3.style.backgroundColor = "#F4F1EB";
  dlry3Header.style.color = "#333D4B";
  dlry3Desc.style.color = "#333D4B";
  newDlry.textContent=" Every week";
}
}
dlry2.addEventListener('click', changeDlry2State);
function changeDlry2State(e){
  if(e.target.id = 'dlry-card2'){
    dlry2.style.backgroundColor = "#0E8784";
    dlry2Header.style.color = "#FEFCF7";
    dlry2Desc.style.color = "#FEFCF7";
    dlry1.style.backgroundColor = "#F4F1EB";
      dlry1Header.style.color = "#333D4B";
      dlry1Desc.style.color = "#333D4B";
      dlry3.style.backgroundColor = "#F4F1EB";
      dlry3Header.style.color = "#333D4B";
      dlry3Desc.style.color = "#333D4B";
      newDlry.textContent="Every 2 weeks";
  }
}

dlry3.addEventListener('click', changeDlry3State);
function changeDlry3State(e){
  if(e.target.id = 'dlry-card3'){
    dlry3.style.backgroundColor = "#0E8784";
    dlry3Header.style.color = "#FEFCF7";
    dlry3Desc.style.color = "#FEFCF7";
    dlry2.style.backgroundColor = "#F4F1EB";
      dlry2Header.style.color = "#333D4B";
      dlry2Desc.style.color = "#333D4B";
      dlry1.style.backgroundColor = "#F4F1EB";
      dlry1Header.style.color = "#333D4B";
      dlry1Desc.style.color = "#333D4B";
      newDlry.textContent=" Every month";
  }
}
var orderDesc = document.querySelector('.order-desc');
var checkOutDesc = document.querySelector('.checkout-desc');
const footer = document.querySelector('.container');
const orderSummary = document.querySelector('.order-summary');
const heroBanner = document.querySelector('.plan-hero-banner');
const stepBanner = document.querySelector('.step-plan');
const planContent = document.querySelector('.plan-content');
const modalUnblur = document.querySelector('.modal-unblur');
const modal = document.getElementById('modal-container');
const createPlan = document.getElementById('plan-submit');
let orderSelected = document.getElementById('order-desc'); 
createPlan.addEventListener('click', proceedToCheckOut);
function proceedToCheckOut(e){
  if(e.target.id = 'plan-submit'){
  modal.style.display = "block";
  heroBanner.classList.add('plan-hero-banner-blur');
  stepBanner.classList.add('step-plan-blur');
  planContent.classList.add('plan-content-blur');
  orderSummary.classList.add('order-summary-blur');
  footer.classList.add('container-blur');
  checkOutDesc.innerHTML = orderDesc.innerHTML;
  createPlan.disabled = true;
  }else if(e.target.id = 'window'){
    createPlan.disabled = false;
  }
}

window.addEventListener('click', closeModal);
function closeModal(e){
  if(e.target.id != 'plan-submit'){
  modal.style.display = "none";
  heroBanner.classList.remove('plan-hero-banner-blur');
  stepBanner.classList.remove('step-plan-blur');
  planContent.classList.remove('plan-content-blur');
  orderSummary.classList.remove('order-summary-blur');
  footer.classList.remove('container-blur');
  createPlan.disabled = false;
  }else if(e.target.id = 'plan-submit'){
    modal.style.display = "block";
    createPlan.disabled = true;
  }
}