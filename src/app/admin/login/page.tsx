"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabaseAdminClient } from "@/lib/supabaseAdminClient";
import "../admin.css";

export default function AdminLogin() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOtpChange = (index: number, value: string) => {
    // Handle paste or multiple chars
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split('');
      const newOtp = [...otpArray];
      pastedCode.forEach((char, i) => {
        if (index + i < 6) newOtp[index + i] = char;
      });
      setOtpArray(newOtp);
      setCode(newOtp.join(''));
      
      const nextIndex = Math.min(index + pastedCode.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    const newOtp = [...otpArray];
    newOtp[index] = value;
    setOtpArray(newOtp);
    setCode(newOtp.join(''));

    // Move to next input
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
      // Focus previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError("");
    
    const { error: signInError } = await supabaseAdminClient.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
      }
    });

    setLoading(false);

    if (signInError) {
      // For security, if `shouldCreateUser: false` triggers an error because they don't exist,
      // it might say "Signups not allowed for otp". 
      if (signInError.message.includes("Signups not allowed")) {
         setError("This email is not authorized as an admin.");
      } else {
         setError(signInError.message);
      }
      return;
    }

    setStep("code");
    // Reset OTP array when going to code step
    setOtpArray(["", "", "", "", "", ""]);
    setCode("");
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    
    setLoading(true);
    setError("");

    const { error: verifyError } = await supabaseAdminClient.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    });

    setLoading(false);

    if (verifyError) {
      setError(verifyError.message);
      return;
    }

    // Success! Redirect to dashboard (layout will verify the admin role via /admin/me)
    router.push("/admin");
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <img src="/images/final_riksho.png" alt="Riksho Admin" className="admin-login-logo" />
        <h2 className="admin-page-title" style={{ fontSize: "24px", marginBottom: "8px" }}>Admin Portal</h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "24px" }}>
          Sign in to manage drivers and platform operations.
        </p>

        {error && <div className="admin-error">{error}</div>}

        {step === "email" ? (
          <form onSubmit={handleSendCode}>
            <input
              type="email"
              placeholder="Admin Email Address"
              className="admin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="admin-btn admin-btn-primary admin-btn-block"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Login Code"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode}>
            <p style={{ fontSize: "14px", marginBottom: "16px" }}>Code sent to {email}</p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "24px" }}>
              {otpArray.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  className="admin-input"
                  style={{ 
                    width: "48px", 
                    height: "56px", 
                    textAlign: "center", 
                    fontSize: "24px", 
                    padding: "0",
                    margin: "0",
                    fontWeight: 600,
                    color: "var(--color-indigo)"
                  }}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  maxLength={6} // Allow paste up to 6 chars
                  required={index === 0}
                />
              ))}
            </div>
            <button 
              type="submit" 
              className="admin-btn admin-btn-primary admin-btn-block"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Sign In"}
            </button>
            <button 
              type="button" 
              className="admin-btn admin-btn-secondary admin-btn-block"
              style={{ marginTop: "12px" }}
              onClick={() => setStep("email")}
              disabled={loading}
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
