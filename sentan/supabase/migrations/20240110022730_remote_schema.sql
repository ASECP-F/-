create table "public"."posts" (
    "id" uuid not null,
    "title" text,
    "content" text,
    "favorite" integer,
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone
);


alter table "public"."posts" enable row level security;

CREATE UNIQUE INDEX posts_pkey ON public.posts USING btree (id);

alter table "public"."posts" add constraint "posts_pkey" PRIMARY KEY using index "posts_pkey";

grant delete on table "public"."posts" to "anon";

grant insert on table "public"."posts" to "anon";

grant references on table "public"."posts" to "anon";

grant select on table "public"."posts" to "anon";

grant trigger on table "public"."posts" to "anon";

grant truncate on table "public"."posts" to "anon";

grant update on table "public"."posts" to "anon";

grant delete on table "public"."posts" to "authenticated";

grant insert on table "public"."posts" to "authenticated";

grant references on table "public"."posts" to "authenticated";

grant select on table "public"."posts" to "authenticated";

grant trigger on table "public"."posts" to "authenticated";

grant truncate on table "public"."posts" to "authenticated";

grant update on table "public"."posts" to "authenticated";

grant delete on table "public"."posts" to "service_role";

grant insert on table "public"."posts" to "service_role";

grant references on table "public"."posts" to "service_role";

grant select on table "public"."posts" to "service_role";

grant trigger on table "public"."posts" to "service_role";

grant truncate on table "public"."posts" to "service_role";

grant update on table "public"."posts" to "service_role";

create policy "Public posts are viewable by everyone."
on "public"."posts"
as permissive
for select
to public
using (true);


create policy "Users can delete own post."
on "public"."posts"
as permissive
for delete
to public
using (true);


create policy "Users can insert their own post."
on "public"."posts"
as permissive
for insert
to public
with check (true);


create policy "Users can update own post."
on "public"."posts"
as permissive
for update
to public
using (true);



