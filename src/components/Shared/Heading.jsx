import PropTypes from 'prop-types';

function Heading({ title, subtitle, className, titleClassName, subtitleClassName }) {
    return (
        <div className={className}>
            <h1 className={titleClassName}>{title}</h1>
            <p className={subtitleClassName}>{subtitle}</p>
        </div>
    );
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    className: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
};

export default Heading;
