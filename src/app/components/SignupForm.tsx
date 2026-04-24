'use client'

import Link from "next/link";
import axios from "axios";
import {useState} from "react";

export function SignUpForm({consentOptions}: {consentOptions: string[]})
{
    const [showForm, setShowForm] = useState(true);

    const DOMAIN = process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://runplan.mikecongreve.com';
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setShowForm(false);

        const purposes = consentOptions.filter(option => formData.get(option) === 'On');

        await axios(DOMAIN + '/api/add-contact', {
            method: 'POST',
            data: {
                email: formData.get('email'),
                purpose: purposes,
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).catch(() => {
            setShowForm(true);
        });
    }


    function updateGuard() {
        const anyChecked = ['consent-invitation', 'consent-newsletter']
            .some(id => (document.getElementById(id) as HTMLInputElement)?.checked);
        const guard = document.getElementById('consent-guard') as HTMLInputElement;
        guard.value = anyChecked ? 'yes' : '';
    }

    return (
        <>
        <form onSubmit={handleSubmit} className={showForm ? '' : 'hidden'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <div className="sm:col-span-2">
                Sign up for RunPlanner
                </div>
            <label htmlFor="email" className="text-right ">Email Address</label>
                <div className="w-full">[ <input required type="email" id="email" name="email" className="border-b-2 bbc-btn w-4/5" /> ] </div>

            <label htmlFor="consent-invitation"  className="text-right">I want to receive an invitation to play with RunPlanner</label>
                <div><input onChange={updateGuard} type="checkbox" id="consent-invitation" name="runplanner-invitation" value="On" className="bbc-btn" /></div>
            <label htmlFor="consent-newsletter"  className="text-right">I want to receive a newsletter or any other promotional things from Mike</label>
                <div><input onChange={updateGuard} type="checkbox" id="consent-newsletter" name="newsletter" value="On" className="bbc-btn" /></div>
            <input
                type="text"
                name="_consent_guard"
                required
                aria-hidden="true"
                tabIndex={-1}
                style={{ opacity: 0, position: 'absolute', pointerEvents: 'none', width: 0, height: 0 }}
                id="consent-guard"
            />

                <Link href={"https://runplan.mikecongreve.com/privacy-policy"}>Read privacy policy</Link>
                <button type="submit" className="bbc-cyan bbc-btn">Submit</button>
            </div>
        </form>
        <div className={showForm ? 'hidden' : ''}>
            Thanks!
        </div>
            </>
    )

}