'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }
  revalidatePath('/', 'layout');
  redirect('/dashboard');
}

export async function checkLoggedIn() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }
}

export async function checkLoggedOut() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!error && data?.user) {
    redirect('/dashboard');
  }
}
