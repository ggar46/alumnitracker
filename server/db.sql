--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 14.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alumni; Type: TABLE; Schema: public; Owner: tpl622_2
--

CREATE TABLE public.alumni (
    id integer NOT NULL,
    name character varying(255),
    "position" character varying(255),
    company character varying(255),
    salary character varying(255),
    start_date date,
    is_looking boolean,
    linkedin character varying(255),
    is_converted boolean
);


ALTER TABLE public.alumni OWNER TO tpl622_2;

--
-- Name: alumni_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

ALTER TABLE public.alumni ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.alumni_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_id_seq OWNER TO tpl622_2;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_2
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.alumni.id;


--
-- Data for Name: alumni; Type: TABLE DATA; Schema: public; Owner: tpl622_2
--

INSERT INTO public.alumni (id, name, "position", company, salary, start_date, is_looking, linkedin, is_converted) OVERRIDING SYSTEM VALUE VALUES (1, 'Dana', 'job', 'company', 'money', '2023-09-08', false, 'profile', true);


--
-- Name: alumni_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.alumni_id_seq', 2, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.students_id_seq', 1, true);


--
-- Name: alumni alumni_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.alumni
    ADD CONSTRAINT alumni_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

