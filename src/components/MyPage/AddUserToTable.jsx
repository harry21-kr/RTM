export async function addUserToTable(supabaseClient, user, password) {
  const { error } = await supabaseClient.from('users').insert([
    {
      id: user.id,
      password: password,
      email: user.email,
      profileImgURL: 'https://fiupbivkgjqqvpwaacik.supabase.co/storage/v1/object/public/profile/default-profile.png',
      comment: '한줄 코멘트를 작성해주세요!',
      name: user.user_metadata.userName,
      siteName: `${user.user_metadata.userName}의 기록`
    }
  ]);

  if (error) {
    console.log('사용자 추가 오류:', error.message);
  } else {
    console.log('사용자 정보가 성공적으로 추가됨');
  }
}
