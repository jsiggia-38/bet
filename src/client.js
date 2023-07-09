import { createClient } from '@supabase/supabase-js';

const URL = "https://eshzyztkpqilzotcnkyh.supabase.co";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzaHp5enRrcHFpbHpvdGNua3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0Mzg1ODksImV4cCI6MTk5NzAxNDU4OX0.wy9k_a2wYqbYIvUCfZdipsKtzC5whcncpcQSeLCa1Aw";


export const supabase = createClient(URL, API_KEY);

