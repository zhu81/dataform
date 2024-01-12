function test_user(emailDomain, registrationIP, userId) {
  const emailDomainRegex = /(fc4cd|btestu|insparx|paluem)/;
  const registrationIPList = [
    'fkfiv|1|stb2rCMaPl1PfaqnD47mJw==',
    'fkfiv|1|Dv-8pIaqxJ1FRbfEj1bd7A==',
    'fkfiv|1|Dk8zhm6e_9mSrd9SzX_nOQ==',
    'fkfiv|1|Qqjbni-XCuTdeYWr3ijuOA==',
    'fkfiv|1|fAlcdxda5vWpf972Xi06jw==',
    'fkfiv|1|2BZD_Quwy95_2631QBpz4g==', 
    'fkfiv|1|CwB_0IIynI2pCizZG2uaaA==', 
    'fkfiv|1|Q-YXeXGZTGLCzH05Rv6rog==', 
    'fkfiv|1|TLUzJAHwl9Q5q_eyIa_EAQ==', 
    'fkfiv|1|4tGsaKrXnZ1Qm_f7m0c49Q==', 
    'fkfiv|1|lE4BofGS-dExg3U1N8W5HQ==', 
    'fkfiv|1|i_xtBEHJ3sCT75acSi63Aw=='
    // ... (add the remaining IPs)
  ];
  const userIdList = [64057739, 252329351, 252329389, 252329181];

  const condition =
    emailDomainRegex.test(emailDomain) ||
    registrationIPList.includes(registrationIP) ||
    userIdList.includes(userId);

  return condition ? 1 : 0;
}

module.exports = { test_user }
