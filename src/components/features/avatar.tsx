import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  // Get initials for the fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center">
      <ShadcnAvatar className="h-10 w-10 mr-4">
        <AvatarImage src={picture} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </ShadcnAvatar>
      <div className="text-base font-medium">{name}</div>
    </div>
  );
};

export default Avatar;
