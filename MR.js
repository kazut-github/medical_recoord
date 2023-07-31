(()=>{
    // 　　クリニック名
  const $hos_name = document.querySelector('.hospital_name');
  // console.log($hos_name.textContent);
  
  // ID
  const input_id = document.querySelector('input[name=identity]');
  console.log(input_id);
  // 氏名
  const input_name = document.querySelector('input[name=your_name]');
  console.log(input_name);
  // 性別
  const input_gender = document.querySelector('input[name=gender]');
  console.log(input_gender);
  // 年齢
  const input_age = document.querySelector('input[name=age]');
  console.log(input_age);
  // 身長
  const input_height = document.querySelector('input[name=height]');
  console.log(input_height);
  // 体重
  const input_weight = document.querySelector('input[name=weight]');
  console.log(input_weight);
  // 既往歴
  const input_history = document.querySelector('textarea[name=history]');
  console.log(input_history);
  // 本日の主訴
  const input_complaint = document.querySelector('textarea[name=complaint]');
  console.log(input_complaint);

  
// クラス
class Patients {
  constructor(info){
    
     this.id = info.id; 
     this.name = info.name;
     this.gender = info.gender;
     this.age = info.age;
     this.height = info.height;
     this.weight = info.weight;
     this.medical_history = info.medical_history;
     this.main_compliant = info.main_compliant;
    }
   
  
  onDisplay(info) {
    input_id.addEventListener('change', (e) =>{
      //  alert(input_id.value);
      if (input_id.value === "1") {
          input_name.value = patient_one.name;
          input_gender.value = patient_one.gender;
          input_age.value = patient_one.age;
          input_height.value = patient_one.height;
          input_weight.value = patient_one.weight;
          input_history.value = patient_one.medical_history;
          input_complaint.value = patient_one.main_compliant;
        } 
      else if (input_id.value === "2") {
          input_name.value = patient_two.name;
          input_gender.value = patient_two.gender;
          input_age.value = patient_two.age;
          input_height.value = patient_two.height;
          input_weight.value = patient_two.weight;
          input_history.value = patient_one.medical_history;
          input_complaint.value = patient_two.medical_history;
      }
      else if (input_id.value === "3") {
          input_name.value = patient_three.name;
          input_gender.value = patient_three.gender;
          input_age.value = patient_three.age;
          input_height.value = patient_three.height;
          input_weight.value = patient_three.weight;
          input_history.value = patient_three.medical_history;
          input_complaint.value = patient_three.medical_history;
      }
      else if (input_id.value === "4") {
          input_name.value = patient_four.name;
          input_gender.value = patient_four.gender;
          input_age.value = patient_four.age;
          input_height.value = patient_four.height;
          input_weight.value = patient_four.weight;
          input_history.value = patient_four.medical_history;
          input_complaint.value = patient_four.medical_history;
      }
      else if (input_id.value === "5") {
          input_name.value = patient_five.name;
          input_gender.value = patient_five.gender;
          input_age.value = patient_five.age;
          input_height.value = patient_five.height;
          input_weight.value = patient_five.weight;
          input_history.value = patient_five.medical_history;
          input_complaint.value = patient_five.medical_history;
      }
      else {
          alert('このIDの患者さんは存在しません');     
      }
  });
 }
}

const patient_one = new Patients({
    id: '1',
    name: '神野　孝 (カミノ　タカシ)',
    gender: '男性',
    age: 44,
    height: 160,
    weight: 65,
    medical_history: ['盲腸','急性胃腸炎'],
    main_compliant: '目の痛み',
});
const patient_two = new Patients({
    id: '2',
    name: '水本　香 (ミズモト　カオリ)',
    gender: '女性',
    age: 74,
    height: 157,
    weight: 47,
    medical_history: ['白内障','網膜剥離'],
    main_compliant: '目の痒み',
});
const patient_three = new Patients({
    id: '3',
    name: '雷科　優仁 (ライカ　ユウジン)',
    gender: '男性',
    age: 31,
    height: 184,
    weight: 77,
    medical_history: ['ICL手術',''],
    main_compliant: '術後経過',
});
const patient_four = new Patients({
    id: '4',
    name: ' 火野　猛 (ヒノ　タケシ)',
    gender: '男性',
    age: 86,
    height: 167,
    weight: 81,
    medical_history: ['目の痒み','コンタクトのずれ'],
    main_compliant: '目の乾き',
});
const patient_five = new Patients({
    id: '5',
    name: '木島　瞳 (キジマ　ヒトミ)',
    gender: '女性',
    age: 55,
    height: 147,
    weight: 47,
    medical_history: 'ドライアイ',
    main_compliant: '激しい目の痛み',
});
console.log(patient_two.name);
patient_one.onDisplay();
patient_two.onDisplay();


})();
