emailjs.init('cjdqWWqfNc9Z-Bcth');

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    if(document.getElementById('name').value.trim() != "" && document.getElementById('type').value.trim() != "" && document.getElementById('desc').value.trim() != "" && document.getElementById('phone').value.trim() != ""){
        if(document.getElementById('privacy').checked){
            btn.value = '보내는 중...';
            const serviceID = 'default_service';
            const templateID = 'template_zhc37h5';

            emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = '문의 보내기 →';
                alert('정상적으로 상담이 신청되었습니다. 확인 후 빠른 시일 내에 회신드리겠습니다.');
            }, (err) => {
                btn.value = '문의 보내기 →';
                alert('상담 신청 과정에서 일시적 오류가 발생하였습니다. 새로고침 후 다시 한 번 시도해주세요.');
            });
        }else{
            alert('개인정보 처리방침에 동의해주셔야 상담이 신청됩니다.');
        }
    }else{
        alert('모든 항목들을 입력하신 뒤 버튼을 눌러주세요.');
        return;
    }
});