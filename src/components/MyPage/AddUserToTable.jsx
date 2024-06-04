export async function addUserToTable(supabaseClient, user) {
  const { error } = await supabaseClient.from('users').insert([
    {
      id: user.id,
      email: user.email
    }
  ]);

  if (error) {
    console.log('사용자 추가 오류:', error.message);
  } else {
    console.log('사용자 정보가 성공적으로 추가됨');
  }
}
