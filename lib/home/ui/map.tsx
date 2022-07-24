import { Stack } from "@chakra-ui/react";

export const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21392.291693077023!2d106.90961435!3d47.91633195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692442297c949%3A0x71884efc4dce5cb2!2sSukhbaatar%20Square!5e0!3m2!1sen!2smn!4v1658641854171!5m2!1sen!2smn"
      width="100%"
      height="500"
      style={{ border: 0, marginTop: "50px", marginBottom: "50px" }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};
