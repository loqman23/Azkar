(function(_0x53e2b2,_0x11c20d){const _0x5a697b=_0x442e,_0x46526a=_0x53e2b2();while(!![]){try{const _0x482850=-parseInt(_0x5a697b(0x16c))/0x1*(-parseInt(_0x5a697b(0x164))/0x2)+parseInt(_0x5a697b(0x169))/0x3*(-parseInt(_0x5a697b(0x170))/0x4)+parseInt(_0x5a697b(0x16f))/0x5+parseInt(_0x5a697b(0x167))/0x6*(-parseInt(_0x5a697b(0x16b))/0x7)+parseInt(_0x5a697b(0x174))/0x8+-parseInt(_0x5a697b(0x16e))/0x9*(parseInt(_0x5a697b(0x166))/0xa)+parseInt(_0x5a697b(0x171))/0xb;if(_0x482850===_0x11c20d)break;else _0x46526a['push'](_0x46526a['shift']());}catch(_0x20c0ec){_0x46526a['push'](_0x46526a['shift']());}}}(_0x566a,0x5575a));function _0x442e(_0x250aa0,_0x51d81f){const _0x566ab1=_0x566a();return _0x442e=function(_0x442e8c,_0x14b68a){_0x442e8c=_0x442e8c-0x164;let _0x57aecd=_0x566ab1[_0x442e8c];return _0x57aecd;},_0x442e(_0x250aa0,_0x51d81f);}import{createBotSetupModal,createWebhookSetupModal}from'./buttons/createServiceButton.js';import{getUserService}from'../utils/dataManager.js';export async function handleServiceCreation(_0x3792d0,_0x26dcd5){const _0x388248=_0x442e,_0x2a9ed9=_0x3792d0['user']['id'],_0x1f20c8=await getUserService(_0x2a9ed9);if(_0x1f20c8){await _0x3792d0[_0x388248(0x16a)]({'content':_0x388248(0x172),'ephemeral':!![]});return;}try{const _0x27abc9=_0x26dcd5===_0x388248(0x16d)?await createBotSetupModal():await createWebhookSetupModal();await _0x3792d0['showModal'](_0x27abc9);}catch(_0x5be785){console[_0x388248(0x168)](_0x388248(0x173),_0x5be785),await _0x3792d0[_0x388248(0x16a)]({'content':_0x388248(0x165),'ephemeral':!![]});}}function _0x566a(){const _0x5288b8=['8YxtqFQ','3756445dUmsaL','⚠️\x20عذراً،\x20لا\x20يمكنك\x20إنشاء\x20أكثر\x20من\x20خدمة\x20واحدة.','Error\x20showing\x20service\x20setup\x20modal:','1171328wGZyQc','8OsTZPF','❌\x20حدث\x20خطأ\x20أثناء\x20إعداد\x20الخدمة.\x20الرجاء\x20المحاولة\x20مرة\x20أخرى.','2947310HbKkDt','29616twgSTg','error','444357NiEgUX','reply','357KYUoTm','19991XbcwKU','bot','9ElMYcV','3124360Bzlmah'];_0x566a=function(){return _0x5288b8;};return _0x566a();}