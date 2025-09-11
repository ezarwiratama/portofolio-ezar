"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { auth, loginWithGoogle, logout, db } from "../../firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

interface Message {
  id: string;
  text: string;
  uid: string;
  displayName: string;
  photoURL: string;
  createdAt?: Timestamp;
}

export default function ChatRoom() {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  // Cek login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Ambil pesan real-time
  // useEffect(() => {
  //   const q = query(collection(db, "messages"), orderBy("createdAt"));
  //   const unsub = onSnapshot(q, (snapshot) => {
  //     setMessages(
  //       snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Message))
  //     );
  //   });
  //   return () => unsub();
  // }, []);

    // Ambil pesan real-time hanya kalau user sudah login
  useEffect(() => {
    if (!user) return; // kalau belum login, jangan query

    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt ?? null,
          } as Message;
        })
      );
    });

    return () => unsub();
  }, [user]); // jalankan ulang kalau user berubah


  // Kirim pesan
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-5">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">💬 Chat Room</h2>

      {/* Header user */}
      {user && (
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
          <div className="flex items-center gap-3">
            <Image
              src={user.photoURL ?? "https://via.placeholder.com/40"}
              alt="avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white font-semibold">{user.displayName}</span>
          </div>
          <button
            onClick={logout}
            className="bg-red-600 px-4 py-1 rounded-full text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      )}

      {/* Area pesan */}
      <div className="h-72 overflow-y-auto border border-gray-700 p-3 rounded-lg bg-zinc-800 mb-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 ${msg.uid === user?.uid ? "justify-end" : "justify-start"}`}
          >
            {msg.uid !== user?.uid && (
              <Image
                src={msg.photoURL || "https://via.placeholder.com/40"}
                alt="avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.uid === user?.uid ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
              }`}
            >
              <div className="text-xs opacity-70 mb-1">{msg.displayName}</div>
              <div>{msg.text}</div>
            </div>
            {msg.uid === user?.uid && (
              <Image
                src={msg.photoURL || "https://via.placeholder.com/40"}
                alt="avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
            )}
          </div>
        ))}
      </div>

      {/* Form login / kirim pesan */}
      {user ? (
        <form onSubmit={sendMessage} className="flex gap-2 flex-wrap sm:flex-nowrap w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 min-w-0 p-2 rounded-lg bg-zinc-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 w-full sm:w-auto"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={loginWithGoogle}
            className="flex items-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <Image
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
            Login with Google
          </button>
          <p className="text-sm text-gray-400">Login untuk mengirim pesan</p>
        </div>
      )}
    </div>
  );
}
