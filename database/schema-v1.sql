-- schema-v1.sql
-- PostgreSQL / Supabase
create extension if not exists pgcrypto;

create table competitions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  country text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo_url text,
  country text,
  created_at timestamptz not null default now()
);

create table matches (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references competitions(id),
  home_team_id uuid not null references teams(id),
  away_team_id uuid not null references teams(id),
  scheduled_at timestamptz not null,
  status text not null default 'scheduled' check (status in ('scheduled','live','finished','postponed','cancelled')),
  home_score integer,
  away_score integer,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (home_team_id <> away_team_id)
);

create table match_stats (
  id uuid primary key default gen_random_uuid(),
  match_id uuid not null unique references matches(id) on delete cascade,
  home_possession numeric,
  away_possession numeric,
  home_shots integer,
  away_shots integer,
  home_shots_on_target integer,
  away_shots_on_target integer,
  home_corners integer,
  away_corners integer,
  source_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table predictions (
  id uuid primary key default gen_random_uuid(),
  match_id uuid not null references matches(id) on delete cascade,
  title text not null,
  market_type text not null,
  selection text not null,
  odds numeric,
  confidence numeric check (confidence is null or (confidence >= 0 and confidence <= 100)),
  analysis text not null,
  status text not null default 'draft' check (status in ('draft','published','won','lost','void')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table prediction_results (
  id uuid primary key default gen_random_uuid(),
  prediction_id uuid not null unique references predictions(id) on delete cascade,
  result text not null check (result in ('won','lost','void')),
  settled_at timestamptz not null default now(),
  note text
);

create table article_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique
);

create table articles (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references article_categories(id),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null,
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table community_members (
  id uuid primary key default gen_random_uuid(),
  telegram_username text,
  display_name text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table community_points (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references community_members(id) on delete cascade,
  points integer not null,
  reason text not null,
  created_at timestamptz not null default now()
);

create table reward_periods (
  id uuid primary key default gen_random_uuid(),
  period_start date not null,
  period_end date not null,
  status text not null default 'open' check (status in ('open','closed','paid')),
  reward_pool_amount numeric,
  currency text,
  created_at timestamptz not null default now(),
  check (period_end >= period_start)
);

create table reward_rankings (
  id uuid primary key default gen_random_uuid(),
  reward_period_id uuid not null references reward_periods(id) on delete cascade,
  member_id uuid not null references community_members(id),
  rank integer not null check (rank > 0),
  points integer not null default 0,
  reward_amount numeric,
  created_at timestamptz not null default now(),
  unique (reward_period_id, member_id),
  unique (reward_period_id, rank)
);

create index matches_scheduled_at_idx on matches(scheduled_at);
create index matches_featured_idx on matches(featured);
create index predictions_match_id_idx on predictions(match_id);
create index predictions_status_idx on predictions(status);
create index articles_status_idx on articles(status);
create index community_points_member_id_idx on community_points(member_id);
