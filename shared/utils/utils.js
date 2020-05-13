export function precise2(x) {
  return Math.round(x * 100) / 100;
}

export function precise6(x) {
  return Math.round(x * 1000000) / 1000000;
}

export function dnaFmt(amount, curency = 'DNA') {
  if (!amount || amount == 0) return '-';
  return Number(amount).toLocaleString() + ' ' + curency;
}

export function epochFmt(epoch) {
  var str = epoch + '';
  var l = str.length;
  if (l == 1) return '#000' + epoch;
  if (l == 2) return '#00' + epoch;
  if (l == 3) return '#0' + epoch;
  if (l > 3) return '#' + epoch;
  return '';
}

export function lastSeenFmt(str) {
  const lastSeenDate = new Date(str);
  const now = new Date();
  const diff = Math.ceil(
    Math.abs(lastSeenDate.getTime() - now.getTime()) / 1000
  );

  if (diff < 60) return 'Recently';
  if (diff >= 60 && diff < 360) return '10 minutes ago';
  if (diff >= 360 && diff < 600) return '30 minutes ago';
  if (diff > 360 && diff < 3600) return '1 hour ago';
  if (diff >= 3600) return 'More than 1 hour';
}

export function identityStatusFmt(s) {
  if (!s) return '';
  if (s == 'Undefined') return 'Not validated';
  return s;
}

export function dateFmt(str) {
  const dt = new Date(str);
  return dt.toLocaleDateString();
}

export function dateTimeFmt(str) {
  const dt = new Date(str);
  return (
    dt.toLocaleDateString() +
    ' ' +
    dt.toLocaleTimeString(undefined, { hour12: false })
  );
}

export function rewardTypeFmt(s) {
  if (!s) return '';
  if (s == 'Invitations') return 'Invitation (1st validation)';
  if (s == 'Invitations2') return 'Invitation (2nd validation)';
  if (s == 'Invitations3') return 'Invitation (3rd validation)';
  if (s == 'SavedInvite') return 'Non-spent invitation';
  if (s == 'SavedInviteWin') return 'Non-spent invitation with lottery reward';
  return s;
}

export function flipQualificationStatusFmt(status) {
  if (status == 'QualifiedByNone') return 'Not available';
  return status;
}

export function iconToSrc(icon) {
  var buffArray = new Uint8Array(
    icon
      .substring(2)
      .match(/.{1,2}/g)
      .map((byte) => parseInt(byte, 16))
  );
  return URL.createObjectURL(new Blob([buffArray], { type: 'image/jpeg' }));
}

export function isIdentityPassed(state) {
  return state === 'Newbie' || state === 'Verified' || state === 'Human';
}